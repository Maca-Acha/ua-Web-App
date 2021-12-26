const Curso = require("../models/Curso");

const opinionesController = {
  crearOpinion: async (req, res) => {
    const { cursoId, opinion, usuarioId} = req.body;
    try {
      const nuevaOpinion = await Curso.findOneAndUpdate(
        { _id: cursoId },
        {
          $push: {
            opiniones: { usuarioId: usuarioId, opinion: opinion },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: nuevaOpinion, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e.message });
    }
  },
};

module.exports = opinionesController;
