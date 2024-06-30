const Joi = require('joi');

const volunteerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    skills: Joi.array().items(Joi.string()).required()
});

module.exports = {
    volunteerSchema
};
