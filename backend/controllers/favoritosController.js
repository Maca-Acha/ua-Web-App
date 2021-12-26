const Curso = require('../models/Curso')

const favoritoController = {
    favorito: async (req,res)=>{
        const idCurso = req.body.cursoId
        await Curso.findOne({_id : idCurso})
        const favorito = Curso.favorito.some(fav => fav.toString() === req.body.cursoId.toString())
        const action = favorito ? "$pull" : "$push"
        Curso.findOneAndUpdate(
            {_id:idCurso},{[action]:{favorito: req.body.cursoId}},
            {new:true}
        )
        .then((response) => {
            res.json({response})
        })
        .catch((err) => console.log(err))
        
    }
}

module.exports = favoritoController 