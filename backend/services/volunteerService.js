const Volunteer = require('../models/volunteerModel');

exports.getAllVolunteers = async () => {
    return await Volunteer.find({});
};

exports.createVolunteer = async (data) => {
    const volunteer = new Volunteer(data);
    return await volunteer.save();
};
