const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        nombre: joi.string().min(3).trim().pattern(new RegExp ('[a-zA-Z]')).required().messages({
            'string.empty' : "Este campo es obligatorio",
            'string.min' : "Este campo debe tener al menos 3 caracteres"
        }),
        apellido: joi.string(),
        email: joi.string().min(3).email().required(),
        contraseña: joi.string().required().trim().min(8).required().messages({
            'string.empty' : "Este campo es obligatorio",
            'string.min' : "Este campo debe tener al menos 8 caracteres"
        }),
        foto: joi.string(),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly:false})
    if(validation.error) {
        return res.json({success: false, response:validation.error.details })
    }
    next()
}

module.exports = validator