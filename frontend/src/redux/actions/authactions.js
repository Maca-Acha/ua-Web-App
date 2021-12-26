import axios from "axios"

const authActions = {
    cargarUsuario: (nuevoUsuario) => {
        return async (dispatch) =>{
            try{
                const usuario = await axios.post("", {...nuevoUsuario})
                if(usuario.data.success){
                    localStorage.setItem ('token', user.data.response.token)
                    dispatch({type:'NUEVO_USUARIO`', payload: usuario.data.response})
                }
                else{
                    console.log(usuario.data.error)
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    iniciarSesion: (email,contraseña,google) => {
        return async(dispatch) => {
            try{
                const usuario = await axios.post("", {email,contraseña,google})
                dispatch({type:"INICIAR_SESION", payload: usuario.data.response})
            }catch(error){
                console.log(error)
            }
        }
    },
    /* traerToken: () => {
        return async (dispatch) =>{
            try{
                const token = localStorage.getItem("token")
                 
            }

        }
    } */
}
export default authActions
