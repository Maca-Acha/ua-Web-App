const Curso = require('../models/Curso')

const opinionesController = {
    crearOpinion: async(req,res) => {
        const {cursoId, opinion} = req.body
        try{
            const nuevaOpinion = await Curso.findOneAndUpdate(
                {_id:cursoId},
                {
                    $push:{
                        opiniones: {usuarioId:req.usuario._id, opinion:opinion}
                    }
                },
                {new:true}
                )
            res.json({success:true, response:nuevaOpinion})
        }
    }
}
module.exports = opinionesController;