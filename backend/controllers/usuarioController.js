const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const path = require("path");
let reqPath = path.join(__dirname, "../");

const enviarEmail = async (correo, uniqueString) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "useremailverifyMindhub@gmail.com",
      pass: "mindhub2021",
    },
  });

  let usuario = await Usuario.findOne({ uniqueString: uniqueString });

  const template = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
      <style type="text/css">
        table, td { color: #000000; } a { color: #ffffff; text-decoration: none; } @media (max-width: 480px) { #u_content_text_2 .v-text-align { text-align: center !important; } }
  @media only screen and (min-width: 570px) {
    .u-row {
      width: 550px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-100 {
      width: 550px !important;
    }
  }
  
  @media (max-width: 570px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: calc(100% - 40px) !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  table, tr, td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  @media (max-width: 480px) {
    .hide-mobile {
      max-height: 0px;
      overflow: hidden;
      display: none !important;
    }
  }
      </style>
  
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css">
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> 
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #18181b;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-image: url(cid:logo-back);background-repeat: repeat;background-position: center top;background-color: transparent;">
  
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
    <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 8px solid #000000;border-left: 8px solid #000000;border-right: 8px solid #000000;border-bottom: 0px solid transparent;">
    
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
        
        <img align="center" border="0" src='cid:logo-white' alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 18%;max-width: 99px;" width="99"/>
        
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 100%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 38px; line-height: 38px;">Bienvenido</span></p>
  <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 38px; line-height: 38px;"><span style="line-height: 38px; font-size: 38px;">${usuario.nombre} </span><span style="line-height: 38px; font-size: 38px;">a </span></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #e11d48; line-height: 100%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 44px; line-height: 44px;"><span style="line-height: 44px; font-size: 44px;"><strong> Universidad Autodidacta</strong></span></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #fc5656;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 36px; line-height: 50.4px;"><strong><span style="line-height: 50.4px; font-size: 36px;">&iquest;Estas listo para comenzar a estudiar?</span></strong></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #fc5656;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">Haz clic en el bot&oacute;n de abajo para verificar tu correo:</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
          
  <div class="v-text-align" align="center">
      <a href="http://localhost:4000/api/verificacion/${uniqueString}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e11d48; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
        <span style="display:block;padding:10px 70px;line-height:190%;"><span style="font-size: 16px; line-height: 30.4px;"><strong><span style="line-height: 30.4px; font-size: 16px;">VERIFICA TU CORREO</span></strong></span></span>
      </a>
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:56px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 17px 20px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: left;">*Si usted no se ha registrado, ignore este correo</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #000000;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
    <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:40px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #828388; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 19.6px;">&copy; UA.&nbsp; Todos los derechos reservados </span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    </div>
    </div>
  </div>
  
      </div>
    </div>
  </div>
  
      </td>
    </tr>
    </tbody>
    </table>
  </body>
  </html>`;

  let remitente = "useremailverifyMindhub@gmail.com";
  let opcionesCorreo = {
    from: remitente,
    to: correo,
    subject: "Verificacion de email de usuario",
    html: template,
    attachments: [
      {
        filename: "logo-back.png",
        path: reqPath + "/assets/logo-back.png",
        cid: "logo-back",
      },
      {
        filename: "logo-white.png",
        path: reqPath + "/assets/logo-white.png",
        cid: "logo-white",
      },
    ],
  };

  await transporter.sendMail(opcionesCorreo, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mensaje enviado");
    }
  });
};

const usuarioControlador = {
  verificarCorreo: async (req, res) => {
    const { uniqueString } = req.params;
    const usuario = await Usuario.findOne({ uniqueString: uniqueString });
    if (usuario) {
      usuario.emailVerificado = true;
      usuario.role = "tutor";
      await usuario.save();
      res.redirect("http://localhost:3000/");
    } else {
      res.json({ success: false, response: "Su email no se ha verificado" });
    }
  },
  nuevoUsuario: async (req, res) => {
    const {
      nombre,
      apellido,
      email,
      contraseña,
      foto,
      google,
      role,
      emailVerificado,
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
        let uniqueString = crypto.randomBytes(15).toString("hex");
        const contraseñaHasheada = bcryptjs.hashSync(contraseña, 10);
        const nuevoUsuario = new Usuario({
          nombre,
          apellido,
          email,
          contraseña: contraseñaHasheada,
          foto,
          google,
          role,
          uniqueString,
          emailVerificado,
        });

        const token = jwt.sign({ ...nuevoUsuario }, process.env.SECRET_KEY);

        await nuevoUsuario.save();
        await enviarEmail(email, uniqueString);
        res.json({
          success: true,
          response: { token, ...nuevoUsuario._doc },
          error: null,
          message:
            "Te enviamos un email para validarlo, por favor verifica tu bandeja de entrada para completar el registro",
        });
      }
    } catch (e) {
      res.json({ success: false });
    }
  },
  usuariosRegistrados: async (req, res) => {
    try {
      const usuarios = await Usuario.find();

      let usuariosArray = [];

      usuarios.map((usuario) => {
        usuariosArray.push({
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          foto: usuario.foto,
          id: usuario._id,
        });
      });
      res.json({ success: true, response: usuariosArray, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e });
    }
  },
  inicioSesion: async (req, res) => {
    const { email, contraseña, google } = req.body;
    try {
      const emailExiste = await Usuario.findOne({ email });

      if (emailExiste.google && !google) {
        res.json({
          success: false,
          error: "El usuario no puede iniciar sesion con una cuenta de google",
          response: null,
        });
      }

      if (!emailExiste) {
        res.json({
          success: false,
          error: "El email no existe",
          response: null,
        });
<<<<<<< HEAD
      } else{
        
=======
      } else {
>>>>>>> ca56e236f370cb17b2680431224bd87612e0e0ae
        const contraseñaValida = bcryptjs.compareSync(
          contraseña,
          emailExiste.contraseña
        );

        if (contraseñaValida) {
          const token = jwt.sign({ ...emailExiste }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: { token, ...emailExiste._doc },
            error: null,
          });
        } else {
          res.json({
            success: false,
            error: "La contraseña o email es incorrecto",
            response: null,
          });
        }
      }
    } catch (e) {
      res.json({
        success: false,
        error: "Error inesperado",
        response: null,
      });
    }
  },
  chekearToken: async (req, res) => {
    /*  */
    try {
      res.json({ success: true, response: req.user, error: null });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = usuarioControlador;
