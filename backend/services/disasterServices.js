const Disaster = require('../models/disasterModel');

exports.getAllDisasters = async () => {
    return await Disaster.find({});
};

exports.createDisaster = async (data) => {
    const disaster = new Disaster(data);
    return await disaster.save();
};
