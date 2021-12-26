const Router = require ('express').Router()
const authController = require('../controllers/authController')

Router.route('/registrarse')
.post(authController.nuevoUsuario)



module.exports = Router