const Curso = require("../models/Curso");

const opinionesController = {
  crearOpinion: async (req, res) => {
    const { cursoId, opinion } = req.body;
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
  traerOpiniones:async (req, res) => {
    Curso.find()
    .then(response => {res.json({success: true, response: response})})
    
  },
};

module.exports = opinionesController;