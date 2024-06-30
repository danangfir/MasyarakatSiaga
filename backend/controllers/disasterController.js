const Disaster = require('../models/disasterModels');

exports.getAllDisasters = async (req, h) => {
    try {
        const disasters = await Disaster.find();
        return h.response(disasters).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createDisaster = async (req, h) => {
    try {
        const disaster = new Disaster(req.payload);
        const savedDisaster = await disaster.save();
        return h.response(savedDisaster).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.getDisasterById = async (req, h) => {
    try {
        const disaster = await Disaster.findById(req.params.id);
        if (!disaster) {
            return h.response({ message: 'Disaster not found' }).code(404);
        }
        return h.response(disaster).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.updateDisaster = async (req, h) => {
    try {
        const updatedDisaster = await Disaster.findByIdAndUpdate(req.params.id, req.payload, { new: true });
        if (!updatedDisaster) {
            return h.response({ message: 'Disaster not found' }).code(404);
        }
        return h.response(updatedDisaster).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.deleteDisaster = async (req, h) => {
    try {
        const deletedDisaster = await Disaster.findByIdAndRemove(req.params.id);
        if (!deletedDisaster) {
            return h.response({ message: 'Disaster not found' }).code(404);
        }
        return h.response({ message: 'Disaster deleted successfully' }).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};
