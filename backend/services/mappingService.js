const Mapping = require('../models/mappingModel');

exports.getAllMappings = async () => {
    return await Mapping.find({});
};

exports.createMapping = async (data) => {
    const mapping = new Mapping(data);
    return await mapping.save();
};
