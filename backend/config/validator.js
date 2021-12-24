const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).trim().pattern(new RegExp ('[a-zA-Z]')).required().messages({
            'string.empty' : "this field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),
        lastName: joi.string(),
        email: joi.string().min(3).email().required(),
        password: joi.string().required().trim().min(8).required().messages({
            'string.empty' : "this field is required",
            'string.min' : "This field must be at least 8 characters long"
        }),
        photo: joi.string(),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly:false})
    if(validation.error) {
        return res.json({success: false, response:validation.error.details })
    }
    next()
}

module.exports = validator