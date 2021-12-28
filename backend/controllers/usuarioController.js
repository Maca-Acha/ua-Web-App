const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")
const crypto = require("crypto")

const enviarEmail = async (correo, uniqueString) => {
  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth:{
          user:"uauseremailverification@gmail.com",
          pass:"adminua2021"
      }
  })

  let remitente = "uauseremailverification@gmail.com"
  let opcionesCorreo = {
      from: remitente,
      to: correo,
      subject: "Verificacion de email de usuario",
      html: `Bienvenido a UA. Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aquí</a> para verificar tu correo.`
  };
  await transporter.sendMail(opcionesCorreo, function(error, response){
      if (error){console.log(error)}
      else{console.log("Mensaje enviado")}
  })
}

const usuarioControlador = {

  verificarCorreo: async (req,res) => {
    const {uniqueString} = req.params;
    const user = await User.findOne({uniqueString:uniqueString})
    if(user){
        user.emailVerificado = true
        await user.save()
        res.redirect("http://localhost:3000/")
    }
    else{res.json({success: false, response: "Su email no se ha verificado"})}
  },

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
        let uniqueString = crypto.randomBytes(15).toString('hex')
        let emailVerificado = false
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
          uniqueString,
          emailVerificado
        });
        const token = jwt.sign({ ...nuevoUsuario }, process.env.SECRET_KEY);
        await nuevoUsuario.save();
        await enviarEmail(email,uniqueString)
        res.json({
          success: true,
          response: { token, ...nuevoUsuario._doc },
          error: null,
          message: "Te enviamos un email para validarlo, por favor verifica tu bandeja de entrada para completar el registro"
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
      if (emailExiste) {

        if (emailExiste.emailVerificado){
          let contraseñaCorrecta = bcryptjs.compareSync(
          contraseña,
          emailExiste.contraseña
        )
        if (contraseñaCorrecta) {
          const token = jwt.sign({ ...emailExiste }, process.env.SECRET_KEY)
          res.json({
            success: true,
            response: { token, ...emailExiste._doc },
            error: null
          })}else {
            res.json({
              success: false,
              error: "La contraseña es incorrecta",
              response: null,
            });
          }
        } else {
          res.json({
            success: false,
            error: "Tu email no está verificado, por favor revisa tu correo",
            response: null,
          });
        }
      } else {
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
    res.json(req.user);
  },
  obtenerRoles: async (req, res) => {
    try {
      if (req.user) {
        res.json({ success: true, response: req.user, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = usuarioControlador;
