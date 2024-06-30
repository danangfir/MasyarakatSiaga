const Joi = require('joi');

const disasterSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    location: Joi.string().required()
});

module.exports = {
    disasterSchema
};
