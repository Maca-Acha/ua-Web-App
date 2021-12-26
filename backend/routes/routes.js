const Router = require ('express').Router()
const {nuevoUsuario, usuariosRegistrados, inicioSesion} = require('../controllers/usuarioController')

Router.route('/registrarse')
.post(nuevoUsuario)
.get(usuariosRegistrados)

Router.route('/inicioSesion')
.post(inicioSesion)


module.exports = Router