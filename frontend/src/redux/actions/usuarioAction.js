import axios from "axios";

const usuarioAction = {
  obtenerRoles: (token) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(
          "http://localhost:4000/api/registrarse",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(respuesta);
        dispatch({ type: "ROLES", payload: { rol: respuesta.data.rol } });
      } catch (e) {
        console.log(e.message);
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
        console.log(usuario);
        if (usuario.data.success && !usuario.data.error) {
          localStorage.setItem("token", usuario.data.response.token);
          dispatch({ type: "INICIO_SESION", payload: usuario.data });
          return { success: true, response: usuario.data };
        } else {
          return { error: usuario.data.error };
        }
      } catch (e) {
        console.log(e.message);
      }
    };
  },
};
export default usuarioAction;
