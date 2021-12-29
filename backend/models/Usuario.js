const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:{type:String, required: true}, 
    apellido:{type:String, required: true},
    email:{type:String, required: true},
    contraseña:{type: String, required: true},
    foto:{type: String},
    google: {type: Boolean, default: false},
    role:{ type: String, default:"alumno"}
})

const Usuario = mongoose.model("usuario", usuarioSchema)

module.exports = Usuario;