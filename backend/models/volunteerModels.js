const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    skills: [String]
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
