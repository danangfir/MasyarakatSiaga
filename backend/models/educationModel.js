const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    title: String,
    content: String,
    date: Date
})

module.exports = mongoose.model('Education', EducationSchema);
