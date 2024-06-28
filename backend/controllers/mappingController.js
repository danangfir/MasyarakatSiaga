const MappingService = require('../services/mappingService');

exports.getAllMappings = async (request, h) => {
    try {
        const mappings = await MappingService.getAllMappings();
        return h.response(mappings).code(200);
    } catch (err) {
        return h.response(err).code(500);
    }
};

exports.createMapping = async (request, h) => {
    try {
        const mapping = await MappingService.createMapping(request.payload);
        return h.response(mapping).code(201);
    } catch (err) {
        return h.response(err).code(500);
    }
};
