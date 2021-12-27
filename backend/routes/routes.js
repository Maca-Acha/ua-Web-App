const Router = require("express").Router();
const {nuevoUsuario, usuariosRegistrados, inicioSesion, obtenerRoles} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {crearOpinion,borrarOpinion,editarOpinion} = require('../controllers/opinionesController')


Router.route("/registrarse")
  .post(nuevoUsuario)
  .get(usuariosRegistrados)
  .post(obtenerRoles);

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
