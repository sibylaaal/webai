const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:String,
    Creat_At: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
