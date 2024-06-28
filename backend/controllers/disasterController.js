const DisasterService = require('../services/disasterServices');

exports.getAllDisasters = async (request, h) => {
    try {
        const disasters = await DisasterService.getAllDisasters();
        return h.response(disasters).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createDisaster = async (request, h) => {
    try {
        const disaster = await DisasterService.createDisaster(request.payload);
        return h.response(disaster).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};
