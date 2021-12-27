const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

const usuarioControlador = {
  nuevoUsuario: async (req, res) => {
    const { nombre, apellido, email, contraseña, foto, google } = req.body;
    try {
      const usuarioExiste = await Usuario.findOne({ email });
      if (usuarioExiste) {
        console.log(email);
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
      res.json({ success: false, response: null });
    }
  },
};

module.exports = usuarioControlador;
