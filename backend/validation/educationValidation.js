const Joi = require('joi');

const educationSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.date().required()
});

module.exports = {
    educationSchema
};
