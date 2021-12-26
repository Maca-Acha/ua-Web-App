const mongoose = require('mongoose');

const cusoSchema = new mongoose.Schema({
    nombre:{type:String, required: true},
    tutor:{type: mongoose.Types.ObjectId, ref:'tutor'},
    discripcion:{type:String, requiered: true},
})

const Cuso = mongoose.model("cuso", cusoSchema )

module.exports = Cuso;