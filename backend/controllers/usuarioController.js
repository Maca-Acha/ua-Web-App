const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

const usuarioControlador = {
  nuevoUsuario: async (req, res) => {
    const {
      nombre,
      apellido,
      email,
      contraseña,
      foto,
      google,
      tutor,
      admin,
      role,
    } = req.body;
    try {
      const usuarioExiste = await Usuario.findOne({ email });
      if (usuarioExiste) {
        res.json({
          success: false,
          error: "El email ya esta en uso",
          response: null,
        });
      } else {
        const contraseñaHasheada = bcryptjs.hashSync(contraseña, 10);
        const nuevoUsuario = new Usuario({
          nombre,
          apellido,
          email,
          contraseña: contraseñaHasheada,
          foto,
          google,
          tutor,
          admin,
          role,
        });
        const token = jwt.sign({ ...nuevoUsuario }, process.env.SECRET_KEY);
        await nuevoUsuario.save();
        res.json({
          success: true,
          response: { token, ...nuevoUsuario._doc },
          error: null,
        });
      }
    } catch (e) {
      res.json({ success: false });
    }
  },
  usuariosRegistrados: (req, res) => {
    Usuario.find().then((response) => {
      res.json({ response });
    });
  },
  inicioSesion: async (req, res) => {
    const { email, contraseña, google} = req.body;

    try {
      const emailExiste = await Usuario.findOne({ email });
      console.log(emailExiste);

      if (emailExiste) {
        let contraseñaCorrecta = bcryptjs.compareSync(
          contraseña,
          emailExiste.contraseña
        );
        console.log(contraseñaCorrecta);
        if (contraseñaCorrecta) {
          const token = jwt.sign({ ...emailExiste }, process.env.SECRET_KEY);
          console.log(token);
          res.json({
            success: true,
            response: { token, ...emailExiste._doc },
            error: null
          });
        } else {
          res.json({
            success: false,
            error: "La contraseña es incorrecta",
            response: null,
          });
        }
      } else {
        console.log(emailExiste);
        res.json({
          success: false,
          error: "El email es incorrecto",
          response: null,
        });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  chekearToken: (req, res) => {
    res.json(req.usuario);
  },
  obtenerRoles: async (req, res) => {
    try {
      // console.log("en el controller")
      // console.log(req.usuario);
      if ((req.usuario)) {
        res.json({ success: true, response: res.usuario, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = usuarioControlador;
