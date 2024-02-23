// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const User = require('./models/user');
const Post = require('./models/posts');
const Category = require('./models/category');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://bilal:74123pol@cluster0.6kronec.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Name of the uploaded file
  }
})

const upload = multer({ storage: storage })
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.post('/register',upload.single('file'),async (req, res) => {
  try {

    const filePath = req.file.path;



    const { username, email, password, } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      Profile:filePath
    });

   const userre= await newUser.save();

    res.status(201).json({user:userre});
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).send('Error registering user');
  }
});
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // If login is successful, return the user object
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error logging in', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });
  app.get('/blogs', async (req, res) => {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1; // default to page 1 if not provided
    const pageSize = 5; // limit of 5 posts per page

    try {
        // Calculate skip value for pagination
        const skip = (page - 1) * pageSize;

        // Query database for paginated blog posts
        const blogs = await Post.find()
            .populate('CategoryId')
            .populate('userId')
            .skip(skip)
            .limit(pageSize);

        // Send the paginated blog posts as a response
        res.status(200).json(blogs);
    } catch (err) {
        // Handle errors
        console.error("Error fetching paginated blog posts:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/blogs",upload.single('file'), async (req, res) => {

  const filePath = req.file.path;
  const {userId , CategoryId, content,title } = req.body;

  const blogs = new Post({
     title,
     content,
     userId,
     CategoryId,
     Image:filePath

  });
  res.status(200).json(blogs);
});



app.post("/category", async (req, res) => {
  const { title } = req.body;

  try {
    const newCategory = new Category({ title });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get("/categories", async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});


  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
