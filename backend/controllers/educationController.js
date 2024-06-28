const EducationService = require('../services/educationService');

exports.getAllEducation = async (request, h) => {
    try {
        const education = await EducationService.getAllEducation();
        return h.response(education).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createEducation = async (request, h) => {
    try {
        const education = await EducationService.createEducation(request.payload);
        return h.response(education).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};
