import axios from "axios";
import { toast } from "react-toastify"

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
                console.log(respuesta)
                dispatch({
                    type: "ROLES",
                    payload: {
                        rol: respuesta.data.response.role,
                        usuario: respuesta.data.response
                    },
                });
            } catch(e) {
                console.log(e.message);
            }
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
                    dispatch({
                        type: "USUARIO",
                        payload: usuario.data.response,
                    });
                } else {
                    console.log(usuario.data.error);
                }
            } catch (error) {
                console.log(error);
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
                  localStorage.setItem("token", usuario.data.response.token);
                  dispatch({ type: "USUARIO", payload: usuario.data });
                  return { success: true, response: usuario.data };
              } else {
                  return(
                      toast.warning("Email o Contraseña incorracta", {
                          position: toast.POSITION.TOP_CENTER,
                      })
                  );
              }
          } catch {
              toast.warning("Email o Contraseña incorracta", {
                  position: toast.POSITION.TOP_CENTER,
              })
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
       console.log(usuario)
      return async (dispatch, getState) => {
        try {
            const usuarios = await axios.put("http://localhost:4000/api/editarUsuario/"+id, usuario);
            dispatch({ type: "USUARIOS", payload: usuarios.data.response });
        } catch (e) {
            console.log(e.message);
        }
    };

    }
};

export default usuarioAction;
