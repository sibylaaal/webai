const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title:String,
    content:String,
    CategoryId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    Image: String,
    Creat_At: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
