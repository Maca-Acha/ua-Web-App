const Router = require("express").Router();
const roles = require ("../config/roles")
const passport = require('../config/passport')
const {nuevoUsuario, usuariosRegistrados, inicioSesion, obtenerRoles, chekearToken, verificarCorreo, borrarUsuario} = require('../controllers/usuarioController')
const {crearCurso, traerCursos, modificarCurso, borrarCurso, favorito} = require('../controllers/cursosController')
// const validator = require('../config/validator')
const {crearOpinion,borrarOpinion,editarOpinion} = require('../controllers/opinionesController')

Router.route("/registrarse")
.post(nuevoUsuario)
.get(usuariosRegistrados)

Router.route("/user/:id")
.delete(borrarUsuario)

Router.route("/inicioSesion")
.post(inicioSesion)

Router.route("/roles") 
.post(passport.authenticate("jwt",{session:false}), obtenerRoles);


Router.route("/inicioSesion").post(inicioSesion);

//Cursos

Router.route("/cursos")
.post(crearCurso)
.get(traerCursos);

Router.route("/curso/:id")
.get(traerCursoId)
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

// Verificación correo

Router.route("/verificacion/:uniqueString")
.get(verificarCorreo)

module.exports = Router;
