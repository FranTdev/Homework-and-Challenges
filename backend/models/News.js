const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const newsSchema = new Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, ref: 'Category', required: true }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;