const Router = require("express").Router();
const roles = require ("../config/roles")
const passport = require('../config/passport')
const {nuevoUsuario, usuariosRegistrados, inicioSesion, obtenerRoles, chekearToken} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {crearOpinion,borrarOpinion,editarOpinion} = require('../controllers/opinionesController')

<<<<<<< HEAD
//Usuarios

=======
>>>>>>> 9991cc37b98bf7a1ec20b5253a6f24a79a9aef79
Router.route("/registrarse")
.post(passport.authenticate("jwt",{session: false}), roles.checkRoles(["alumno"], {session: false}), nuevoUsuario)

// .get(usuariosRegistrados)

Router.route("/inicioSesion")
.post(inicioSesion);

Router.route("/roles") 
.post(passport.authenticate("jwt",{session:false}), obtenerRoles);

<<<<<<< HEAD
Router.route("/token")
.get(passport.authenticate("jwt",{session:false}), chekearToken)
=======

Router.route("/inicioSesion").post(inicioSesion);
>>>>>>> 9991cc37b98bf7a1ec20b5253a6f24a79a9aef79

//Cursos

Router.route("/cursos")
.post(crearCurso)
.get(traerCursos);

Router.route("/curso/:id")
.put(modificarCurso)
.delete(borrarCurso);

//Favoritos

Router.route("/favoritos")
.put(favorito);

// Opiniones

Router.route("/opiniones")
  .post(crearOpinion)
  .delete(borrarOpinion)
  .put(editarOpinion);

module.exports = Router;
