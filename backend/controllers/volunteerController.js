const VolunteerService = require('../services/volunteerService');

exports.getAllVolunteers = async (request, h) => {
    try {
        const volunteers = await VolunteerService.getAllVolunteers();
        return h.response(volunteers).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createVolunteer = async (request, h) => {
    try {
        const volunteer = await VolunteerService.createVolunteer(request.payload);
        return h.response(volunteer).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};
