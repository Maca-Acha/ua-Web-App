const Router = require("express").Router();
const roles = require ("../config/roles")
const passport = require('../config/passport')
const {nuevoUsuario, usuariosRegistrados, inicioSesion, chekearToken} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito, traerCursoId, cursoUsuarioId} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {
  crearOpinion,
  borrarOpinion,
  editarOpinion,
} = require("../controllers/opinionesController");

//Usuarios

Router.route("/registrarse")
.post(nuevoUsuario)
.get(usuariosRegistrados)

Router.route("/inicioSesion").post(inicioSesion);

Router.route("/token")
.get(passport.authenticate("jwt",{session:false}), chekearToken)

//Cursos

Router.route("/cursos").post(crearCurso).get(traerCursos);

Router.route("/curso/:id")
  .get(traerCursoId)
  .put(modificarCurso)
  .delete(borrarCurso);

Router.route("/cursoUsuario/:id")
.get(cursoUsuarioId)

//Favoritos

Router.route("/favoritos")
.put(passport.authenticate('jwt', {session: false}), favorito);

// Opiniones

Router.route("/opiniones")
  .post(passport.authenticate("jwt", { session: false }), crearOpinion)
  .delete(passport.authenticate("jwt", { session: false }), borrarOpinion)
  .put(passport.authenticate("jwt", { session: false }), editarOpinion);

module.exports = Router;
