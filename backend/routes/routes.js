const Router = require("express").Router();
const roles = require ("../config/roles")
const passport = require('../config/passport')
const {nuevoUsuario, usuariosRegistrados, inicioSesion, obtenerRoles} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {crearOpinion,borrarOpinion,editarOpinion} = require('../controllers/opinionesController')

Router.route("/registrarse")
.post(passport.authenticate("jwt",{session: false}), roles.checkRoles(["alumno"], {session: false}), nuevoUsuario)

// .get(usuariosRegistrados)

Router.route("/roles")
  .post(passport.authenticate("jwt",{session:false}), obtenerRoles);



Router.route("/inicioSesion").post(inicioSesion);

Router.route("/cursos").post(crearCurso).get(traerCursos);

Router.route("/curso/:id").put(modificarCurso).delete(borrarCurso);

Router.route("/favoritos").put(favorito);

// Opiniones

Router.route("/opiniones")
  .post(crearOpinion)
  .delete(borrarOpinion)
  .put(editarOpinion);

module.exports = Router;
