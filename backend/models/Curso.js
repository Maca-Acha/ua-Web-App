const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  foto: { type: String, required: true },
  tutor: { type: mongoose.Types.ObjectId, ref: "usuario" },
  descripcion: { type: String, requiered: true },
  acerca: { type: String, requiered: true },
  hashtag: { type: Array },
  url: { type: String, required: true },
  favoritos: [{ type: mongoose.Types.ObjectId, ref: "usuario" }],
  opiniones: [
    {
      usuarioId: { type: mongoose.Types.ObjectId, ref: "usuario" },
      opinion: { type: String },
    },
  ],
  categoria: { type: String, required: true },
});

const Curso = mongoose.model("curso", cursoSchema);

module.exports = Curso;
