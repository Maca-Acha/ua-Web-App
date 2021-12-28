const Router = require("express").Router();
const roles = require ("../config/roles")
const passport = require('../config/passport')
const {nuevoUsuario, usuariosRegistrados, inicioSesion, obtenerRoles, chekearToken} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito, traerCursoId, cursoUsuarioId} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {crearOpinion,borrarOpinion,editarOpinion} = require('../controllers/opinionesController')

//Usuarios

Router.route("/registrarse")
.post(passport.authenticate("jwt",{session: false}), roles.checkRoles(["alumno"], {session: false}), nuevoUsuario)
.get(usuariosRegistrados)


Router.route("/inicioSesion")
.post(inicioSesion);

Router.route("/roles") 
.post(passport.authenticate("jwt",{session:false}), obtenerRoles);

Router.route("/token")
.get(passport.authenticate("jwt",{session:false}), chekearToken)

//Cursos

Router.route("/cursos")
.post(crearCurso)
.get(traerCursos);

Router.route("/curso/:id")
.get(traerCursoId)
.put(modificarCurso)
.delete(borrarCurso);

Router.route("/cursoUsuarioId")
.get(cursoUsuarioId)

//Favoritos

Router.route("/favoritos")
.put(favorito);

// Opiniones

Router.route("/opiniones")
  .post(crearOpinion)
  .delete(borrarOpinion)
  .put(editarOpinion);

module.exports = Router;
