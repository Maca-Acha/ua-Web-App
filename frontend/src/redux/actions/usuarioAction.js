import axios from "axios";

const usuarioAction = {
  obtenerRoles: () => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");
      try {
        const respuesta = await axios.post(
          "http://localhost:4000/api/roles",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
<<<<<<< HEAD
        dispatch({ type: "ROLES", payload: {rol: respuesta.data.response.role, token:token, usuario: respuesta.data.response} });
=======
        console.log(respuesta);
        dispatch({
          type: "ROLES",
          payload: {
            rol: respuesta.data.response.role,
            token: token,
            usuario: respuesta.data.response,
          },
        });
>>>>>>> f582e03438584e612515621d2e1998faf2a1d506
      } catch (e) {
        console.log(e.message);
      }
    };
  },
<<<<<<< HEAD
  nuevoUsuario: (values)=>{
    return async(dispatch, getState)=>{
        try{
          const token = localStorage.getItem('token')
            const usuario = await axios.post("http://localhost:4000/api/registrarse",{...values}, {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
            // console.log(usuario)
            if(usuario.data.success){
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'USUARIO', payload: usuario.data.response})
            }else{
                console.log(usuario.data.error)
            }
        }catch(error){
            console.log(error)
=======
  nuevoUsuario: (values) => {
    return async (dispatch, getState) => {
      try {
        const usuario = await axios.post(
          "http://localhost:4000/api/registrarse",
          { ...values }
        );
        if (usuario.data.success) {
          localStorage.setItem("token", usuario.data.response.token);
          dispatch({ type: "USUARIO", payload: usuario.data.response });
        } else {
          console.log(usuario.data.error);
>>>>>>> f582e03438584e612515621d2e1998faf2a1d506
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
        console.log('usuario', usuario)
        // if (usuario.data.success && !usuario.data.error) {
        //   localStorage.setItem("token", usuario.data.response.token);
        //   dispatch({ type: "USUARIO", payload: usuario.data });
        //   return { success: true, response: usuario.data };
        // } else {
        //   return { error: usuario.data.error };
        // }
      } catch (e) {
        console.log(e.message);
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
};

export default usuarioAction;
