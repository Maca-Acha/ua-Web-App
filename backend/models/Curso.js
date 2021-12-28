const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  foto: { type: String, required: true },
  tutor: { type: mongoose.Types.ObjectId, ref: "usuario" },
  descripcion: { type: String, requiered: true },
  hashtag: { type: Array },
  clases:[
    {
      tituloClase: { type: String },
      url: { type: String },
    }
  ],
  favoritos: [{ type: mongoose.Types.ObjectId, ref: "usuario" }],
  opiniones: [
    {
      usuarioId: { type: mongoose.Types.ObjectId, ref: "usuario" },
      opinion: { type: String },
    },
  ],
});

const Curso = mongoose.model("curso", cursoSchema);

module.exports = Curso;
