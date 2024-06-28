const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisasterSchema = new Schema({
    name: String,
    description: String,
    date: Date,
    location: String
});

module.exports = mongoose.model('Disaster', DisasterSchema);
