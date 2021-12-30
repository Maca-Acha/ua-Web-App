import axios from "axios";

const usuarioAction = {
  obtenerRoles: () => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem('token')
      try {
        const respuesta = await axios.get(
          "http://localhost:4000/api/token",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({ type: "ROLES", payload: {role: respuesta.data.response.role, token:token, usuario: respuesta.data.response} });
      } catch (e) {
        console.log(e.message);
      }
    };
  },
  nuevoUsuario: (values)=>{
    return async(dispatch, getState)=>{
        try{
            const usuario = await axios.post("http://localhost:4000/api/registrarse",{...values})
            if(usuario.data.success){
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'USUARIO', payload: usuario.data.response})
            }else{
                console.log(usuario.data.success)
            }
        }catch(error){
            console.log(error)
        }
    }
  },
  inicioSesion: (values) => {
    return async (dispatch, getState) => {
      try {
        const usuario = await axios.post(
          "http://localhost:4000/api/inicioSesion",
          { ...values }
        );
        console.log('usuario', usuario)
        if (usuario.data.success && !usuario.data.error) {
          localStorage.setItem("token", usuario.data.response.token);
          dispatch({ type: "USUARIO", payload: usuario.data });
          return { success: true, response: usuario.data };
        } else {
          return { error: usuario.data.error };
        }
      } catch (e) {
        console.log(e.message);
      }
    };
  },
  cerrarSesion: () => {
    localStorage.clear()
    return (dispatch, getState) => {
        dispatch({type: "USUARIO", payload: ""})
    }
  },
  editarUsuario: (usuarioId, values) => {
    return async (dispatch, getState) => {
        let response = await axios.put('http://localhost:4000/api/editarUsuario/'+usuarioId, values)
        // console.log(response)
        if (response.data.success){
          localStorage.setItem('token', response.data.response.token)
          dispatch({type: "comment", payload: response.data.response})
        }
        return response
    }
  }
};

export default usuarioAction;
