const mongoose = require('mongoose');

const cancionesSchema = new mongoose.Schema({
    artist:{type:String, required: true},
    title:{type:String, requiered: true},
    likes: {type: Array},
})

const Canciones = mongoose.model("canciones", cancionesSchema )

module.exports = Canciones;