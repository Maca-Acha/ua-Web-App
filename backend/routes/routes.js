const Router = require ('express').Router()
const usuarioControlador = require('../controllers/usuarioControlador')

Router.route('/registrarse')
.post(usuarioControlador.nuevoUsuario)



module.exports = Router