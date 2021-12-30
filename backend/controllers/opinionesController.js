const Curso = require("../models/Curso");

const opinionesController = {
  crearOpinion: async (req, res) => {
    const { cursoId, opinion } = req.body;
    console.log(req.user._id);
    try {
      const nuevaOpinion = await Curso.findOneAndUpdate(
        { _id: cursoId },
        {
          $push: {
            opiniones: { usuarioId: req.user._id, opinion: opinion },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: nuevaOpinion, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  borrarOpinion: async (req, res) => {
    const { cursoId, opinionId } = req.body;
    try {
      const opinionBorrada = await Curso.findOneAndUpdate(
        { _id: cursoId },
        {
          $pull: {
            opiniones: { _id: opinionId },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: opinionBorrada, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
  editarOpinion: async (req, res) => {
    const { opinionId, opinion } = req.body;
    try {
        let editarOpinion = await Curso.findOneAndUpdate(
        { "opiniones._id": opinionId },
        {
          $set: {
            "opiniones.$.opinion": opinion,
          },
        },
        { new: true }
      );
      res.json({ success: true, response: editarOpinion , error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
};

module.exports = opinionesController;

// .$. operador posicional que limita el contenido del array con la condicion de la matriz
// entonces va a buscar el primer elemento que cumpla la condicion, o sea que buscara en
//opiniones el primer elemento que tenga el id que coincida con el id que le pasamos
