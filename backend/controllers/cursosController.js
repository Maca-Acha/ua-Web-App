const Curso = require("../models/Curso");

const cursosController = {
  crearCurso: (req, res) => {
    new Curso({ ...req.body })
      .save()
      .then((response) => res.json({ curso: response, success: true }))
      .catch((e) => res.json({ error: e.errors.price, success: false }));
  },
  traerCursos: (req, res) => {
    Curso.find()
      .populate("tutor")
      .then((response) => res.json({ response }));
  },
  traerCursoId: (req, res) => { //REVISAR
    Curso.findOne({cursoId: req.params.id})
      .then((response) => res.json({ response }));
  },
  modificarCurso: async (req, res) => {
    try {
      actualizado = await Curso.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
    res.json({ success: actualizado ? true : false });
  },
  borrarCurso: async (req, res) => {
    let cursos;
    try {
      await Curso.findOneAndDelete({ _id: req.params.id });
      cursos = await Curso.find();
    } catch (error) {
      console.log(error);
    }
    res.json({ response: cursos, success: true });
  },
  favorito: async (req,res)=>{
    const id = req.body.cursoId
    const curso = await Curso.findOne({_id : id}).lean()
    const favoritoExist = curso.favoritos.some(favorito => favorito.toString() === req.body.usuarioId.toString())
    const action = favoritoExist ? "$pull" : "$push"
    Curso.findOneAndUpdate(
        {_id:id},{[action]:{favoritos: req.body.usuarioId}},
        {new:true}
    ).lean()
    .then((response) => {
        res.json({response})
    })
    .catch((err) => console.log(err))      
  },
  cursoUsuarioId:async (req, res) => {
    Curso.find({favoritos: req.params.id}, {titulo:1, foto:1, hashtag:1}) 
            .then((response) => {
                res.json({response})
            })
            .catch((err) => console.log(err)) 
  }
};

module.exports = cursosController;
