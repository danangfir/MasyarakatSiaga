const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['admin', 'volunteer', 'user'], default: 'user'}
});

module.exports = mongoose.model('User', UserSchema);
