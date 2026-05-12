const Joi = require('joi');


// signup validation
exports.signupSchema = Joi.object({

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required(),

    name: Joi.string()
        .min(3)
        .required(),

    role: Joi.string()
        .valid('admin', 'collector')
        .required()

});