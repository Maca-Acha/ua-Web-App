const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    name:{type:String, required: true}, 
    lastName:{type:String, required: true},
    email:{type:String, required: true},
    password:{type: String, required: true},
    photo:{type: String},
    google: {type: Boolean, default: false}
})

const Usuario = mongoose.model("usuario", usuarioSchema )

module.exports = Usuario;