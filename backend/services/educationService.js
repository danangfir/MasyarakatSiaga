const Education = require('../models/educationModel');

exports.getAllEducation = async () => {
    return await Education.find({});
};

exports.createEducation = async (data) => {
    const education = new Education(data);
    return await education.save();
};
