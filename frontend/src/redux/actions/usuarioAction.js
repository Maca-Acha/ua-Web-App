import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const usuarioAction = {
    obtenerRoles: () => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem("token");
            try {
                const respuesta = await axios.get(
                    "http://localhost:4000/api/token",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                dispatch({
                    type: "ROLES",
                    payload: {
                        rol: respuesta.data.response.role,
                        usuario: respuesta.data.response,
                    },
                });
            } catch (e) {}
        };
    },
    nuevoUsuario: (values) => {
        return async (dispatch, getState) => {
            try {
                const usuario = await axios.post(
                    "http://localhost:4000/api/registrarse",
                    { ...values }
                );
                if (usuario.data.success) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "bottom-right",
                        showConfirmButton: false,
                        timer: 3000,
                        background: "#be123c",
                        iconColor: "#fff",
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                            );
                            toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                            );
                        },
                    });

                    Toast.fire({
                        icon: "success",
                        title: `<span style="color:#FFF"> Bienvenido, ${usuario.data.response.nombre}! <span>`,
                    });
                    dispatch({
                        type: "USUARIO",
                        payload: usuario.data.response,
                    });
                } else {
                    toast.warning("El email ya esta registrado", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            } catch {
                toast.warning("Email ya esta registrado", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        };
    },
    inicioSesion: (values) => {
        return async (dispatch, getState) => {
            try {
                const usuario = await axios.post(
                    "http://localhost:4000/api/inicioSesion",
                    { ...values }
                );
                if (usuario.data.success && !usuario.data.error) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "bottom-right",
                        showConfirmButton: false,
                        timer: 3000,
                        background: "#be123c",
                        iconColor: "#fff",
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                            );
                            toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                            );
                        },
                    });

                    Toast.fire({
                        icon: "success",
                        title: `<span style="color:#FFF"> Bienvenido, ${usuario.data.response.nombre}! <span>`,
                    });
                    localStorage.setItem("token", usuario.data.response.token);
                    dispatch({ type: "USUARIO", payload: usuario.data });
                    return { success: true, response: usuario.data };
                } else {
                    return toast.warning("Email o Contraseña incorrecta", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            } catch {
                toast.warning("Email o Contraseña incorracta", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        };
    },
    traerUsuarios: () => {
        return async (dispatch, getState) => {
            try {
                const usuarios = await axios.get(
                    "http://localhost:4000/api/registrarse"
                );
                dispatch({ type: "USUARIOS", payload: usuarios.data.response });
            } catch (e) {
                console.log(e.message);
            }
        };
    },
    cerrarSesion: () => {
        localStorage.clear();
        return (dispatch, getState) => {
            dispatch({ type: "USUARIO", payload: "" });
        };
    },
    edicionUsuario: (id, usuario) => {
        console.log(usuario);
        return async (dispatch, getState) => {
            try {
                const usuarios = await axios.put(
                    "http://localhost:4000/api/editarUsuario/" + id,
                    usuario
                );
                dispatch({ type: "USUARIOS", payload: usuarios.data.response });
            } catch (e) {
                console.log(e.message);
            }
        };
    },
};

export default usuarioAction;