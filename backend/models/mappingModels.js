const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MappingSchema = new Schema({
    name: String,
    location: String,
    capacity: Number,
    type: String // e.g., "evacuation", "aid distribution"
});

module.exports = mongoose.model('Mapping', MappingSchema);
