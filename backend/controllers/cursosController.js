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
    Curso.findOne({_id: req.params.id})
      .populate("tutor")
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
  favorito: async (req,res) =>{
    const {cursoId, usuarioId, bool} = req.body
    try{
      const favorito = await Curso.findOneAndUpdate(
        {_id: cursoId},
        bool?
        {$addToSet:{favoritos:usuarioId}}
        :{$pull:{favoritos:usuarioId}},
        {new:true}
        )
        res.json({success:true, response: favorito, error:null})
    }catch(e){
      res.json({success:false, response:null, error:e})
    }
  },
  cursoUsuarioId:async (req, res) => {
    Curso.find({favoritos: req.params.id})
      .then((response) => {
          res.json({response})
      })
      .catch((err) => console.log(err)) 
  },
  prueba: async(req, res) => {
    try{
      const fecheo = await Curso.find({
        cursoRelacionado: req.params.cursoId,
      })
      res.json({response: fecheo})
    }catch(e){
      res.json({success:false, error: e})
    }
  }
};

module.exports = cursosController;