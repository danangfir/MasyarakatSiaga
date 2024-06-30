const Education = require('../models/educationModel');

exports.getAllEducation = async (req, h) => {
    try {
        const education = await Education.find();
        return h.response(education).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createEducation = async (req, h) => {
    try {
        const newEducation = new Education(req.payload);
        const savedEducation = await newEducation.save();
        return h.response(savedEducation).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.getEducationById = async (req, h) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return h.response({ message: 'Education not found' }).code(404);
        }
        return h.response(education).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.updateEducation = async (req, h) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.payload, { new: true });
        if (!updatedEducation) {
            return h.response({ message: 'Education not found' }).code(404);
        }
        return h.response(updatedEducation).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.deleteEducation = async (req, h) => {
    try {
        const deletedEducation = await Education.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return h.response({ message: 'Education not found' }).code(404);
        }
        return h.response({ message: 'Education deleted successfully' }).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};
