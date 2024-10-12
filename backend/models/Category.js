const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: { type: String, required: true},
    title: { type: String, required: true},
    news: [{ type: String, ref: 'News' }]
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;