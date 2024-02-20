// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const multer = require('multer');
const User = require('./models/user');

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
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
