const Joi = require('joi');

const mappingSchema = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    capacity: Joi.number().integer().required(),
    type: Joi.string().valid('evacuation', 'distribution').required()
});

module.exports = {
    mappingSchema
};
