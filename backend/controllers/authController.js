const bcryptjs = require ('bcryptjs')
const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken')

const authControllers = {
    registrarse: async(req,res) => {
        const {nombre, apellido, email, contraseña, foto, google} = req.body
        try{
            const usuarioExist = await Usuario.findOne({email})
            if (usuarioExist){
                res.json({success: false, error: "El nombre de usuario ya está registrado", response:null})
            }else{
                const contraseñaHasheada = bcryptjs.hashSync(contraseña, 10)
                const nuevoUsuario = new Usuario ({nombre, apellido, email, contraseña:contraseñaHasheada, foto, google} )
                await nuevoUsuario.save() 
                const token = jwt.sign({...nuevoUsuario}, process.env.SECRET_KEY)
                res.json({success: true, response: {token, nuevoUsuario}, error: null})
                
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    usuariosRegistrados:(req,res) => {
        Usuario.find().then((response)=>{
            res.json({response})
        })
    },
    iniciarSecion:async(req,res) => {
        const {contraseña, email} = req.body
        try{
            const emailExiste = await Usuario.findOne({email})
            if(emailExiste){
                let contraseñaCorrecta = bcryptjs.compareSync(contraseña, emailExiste.contraseña)
                if(contraseñaCorrecta){
                    const token = jwt.sign({...emailExiste}, process.env.SECRET_KEY) 
                    res.json({success:true, response:{token, emailExiste }, error:null})
                }else{
                    res.json({success: false, error: "La contraseña es incorrecta", response: null})
                }
            }else{
                res.json({success: false, error: "El mail es incorrecto", response: null})
            }
        }catch(error){
        res.json({success: false, response: null, error: error})
        }
    },
    chekearToken: (req, res) => {
        res.json(req.usuario)
    },
}

module.exports = authControllers