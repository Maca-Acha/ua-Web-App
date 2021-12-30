import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
import { Formik, Field } from "formik";
import * as yup from "yup";
import GoogleLogin from "react-google-login";
import DOTS from "vanta/dist/vanta.dots.min";
import * as THREE from "three";
import { Link, useNavigate } from "react-router-dom";
import usuarioAction from "../redux/actions/usuarioAction";
import {connect} from "react-redux"


const Registrarse = ({usuario, nuevoUsuario, token, obtenerRoles }) => {
  let navigate = useNavigate()
  localStorage.getItem("token") && token === "" && obtenerRoles()
  usuario.nombre && navigate("/", {replace: true})

  const [showPassword, setShowPassword] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
        //   THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color: 0xe11d48,
        scaleMobile: 1.00,
        showLines: false,
        spacing: 50.00,
        backgroundColor: 0x18181b,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  const SignUpSchema = yup.object().shape({
    nombre: yup
      .string()
      .required("Campo requerido")
      .matches(/^[a-zA-Z]+$/, "Este campo solo acepta letras")
      .min(3, "Minimo 3 caracteres"),
    apellido: yup
      .string()
      .required("Campo requirido")
      .matches(/^[a-zA-Z]+$/, "Este campo solo acepta letras")
      .min(3, "Minimo 3 caracteres"),
    email: yup
      .string()
      .email("Email no valido")
      .matches(/(\W|^)[\w.-]/, "Email invalido")
      .required("Campo requirido"),
    contraseña: yup
      .string()
      .min(8, "Minimo 8 caracteres")
      .required("Campo requirido"),
    foto: yup
      .string()
      .url("URL no valida")
      .required("Campo requirido (foto perfil)"),
  });

  const enviar = async (values) => {
    await nuevoUsuario(values);
  };
  const responseGoogle = async (res) => {
    let googleUser = {
        nombre: res.profileObj.name,
        apellido: 'google',
        email: res.profileObj.email,
        contraseña: res.profileObj.googleId,
        foto: res.profileObj.imageUrl,
        google: true,
        emailVerificado: true
    }
    console.log(res)
    await nuevoUsuario(googleUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  return (
    <>
      <div
        className="flex w-full justify-center mt-32 border-t-2 border-rose-600 pb-8"
        ref={vantaRef}
      >
        <div className="md:w-6/12">
          <div className="flex-col flex ml-auto mr-auto items-center w-full">
            <h1 className="font-bold  text-4xl text-center my-16 text-white mb-16">
              {" "}
              Bienvenido a Universidad Autodidacta{" "}
            </h1>
            <Formik
              initialValues={{
                nombre: "",
                apellido: "",
                email: "",
                contraseña: "",
                foto: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values, { resetForm }) => {
                enviar(values);
                resetForm({ values: "" });
              }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <>
                  <form
                    className="mt-2 flex flex-col w-full px-7 md:px0"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col md:w-6/12 mr-0 md:mr-5">
                        {/* firstname */}
                        <div className="flex items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="text"
                            className="flex-shrink flex-grow text-gray-900  leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            placeholder="Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleChange("nombre")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.nombre && touched.nombre ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#f87171"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              ) : touched.nombre ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#4ade80"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white  text-sm w-11/12 pt-1 mb-3">
                          {errors.nombre && touched.nombre ? (
                            <p className="text-red-400">{errors.nombre}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:w-6/12 ">
                        {/* lastname */}
                        <div className=" flex items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="text"
                            className="flex-shrink flex-grow text-gray-900  leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            placeholder="Apellido"
                            name="apellido"
                            value={values.apellido}
                            onChange={handleChange("apellido")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.apellido && touched.apellido ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#f87171"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              ) : touched.apellido ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#4ade80"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white  text-sm w-11/12 pt-1 mb-3">
                          {errors.apellido && touched.apellido ? (
                            <p className="text-red-400">{errors.apellido}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col md:w-6/12 mr-0 md:mr-5">
                        {/* email */}
                        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded ">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <Field
                            className="flex-shrink flex-grow text-gray-900  leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            placeholder="e-mail"
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.email && touched.email ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#f87171"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              ) : touched.email ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#4ade80"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white  text-sm w-11/12 pt-1 mb-3">
                          {errors.email && touched.email ? (
                            <p className="text-red-400">{errors.email}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>

                      {/* contraseña */}
                      <div className="flex flex-col md:w-6/12">
                        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <Field
                            className="flex-shrink flex-grow text-gray-900  leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            type={showPassword ? "text" : "password"}
                            name="contraseña"
                            onChange={handleChange("contraseña")}
                            value={values.contraseña}
                            placeholder="Password"
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {!showPassword ? (
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="#000000"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => handlePassword()}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#000000"
                                  onClick={() => handlePassword()}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="text-white  text-sm w-11/12 pt-1 mb-3">
                          {errors.contraseña && touched.contraseña ? (
                            <p className="text-red-400">{errors.contraseña}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                      {/* foto */}
                      <div className="flex flex-col w-full ">
                        <div className="flex flex-wrap items-stretch  relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center md:w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#000000"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="url"
                            className="flex-shrink flex-grow text-gray-900  leading-normal border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative text-base outline-none"
                            name="foto"
                            placeholder="Photo URL"
                            value={values.foto}
                            onChange={handleChange("foto")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.foto && touched.foto ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#f87171"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              ) : touched.foto ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#4ade80"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white  text-sm w-11/12 pt-1 mb-3">
                          {errors.foto && touched.foto ? (
                            <p className="text-red-400">{errors.foto}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-baseline lg:items-center">
                      <div className="w-full md:w-6/12 flex justify-center items-center flex-col">
                        <button
                          type="submit"
                          className="w-full px-4 py-2 font-bold transition text-rose-800 bg-rose-300 rounded-full hover:bg-rose-800  hover:text-white focus:outline-none focus:shadow-outline"
                        >
                          {" "}
                          Registrarse{" "}
                        </button>
                        <GoogleLogin
                          clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <button
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              className="w-full px-4 py-2 font-bold transition text-rose-800 bg-rose-300 rounded-full hover:bg-rose-800  hover:text-white focus:outline-none focus:shadow-outline mt-2 mb-5"
                            >
                             Registrarse con Google
                            </button>
                          )}
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                    </div>
                    <Link
                      to="/iniciarsesion"
                      className="text-3xl fw-bold text-white font-roboto text-center leading-normal hover:text-rose-300 mb-7"
                    >
                      Ya tienes cuenta? Inicia sesión
                    </Link>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    usuario: state.reducer.usuario,
    token: state.reducer.token,
  }
}

const mapDispatchToProps = {
  nuevoUsuario: usuarioAction.nuevoUsuario,
  obtenerRoles: usuarioAction.obtenerRoles,
  responseGoogle: usuarioAction.responseGoogle
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrarse);
