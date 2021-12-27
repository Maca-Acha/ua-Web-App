import axios from "axios"

const usuarioAction = {

    obtenerRoles:(token) => {
        return async (dispatch,getState) => {
            try{
                const respuesta = await axios.post("http://localhost:4000/api/registrarse",{},{
                   headers: {
                       Authorization:  "Bearer "  + token 
                   }
                })
                console.log(respuesta)
                dispatch({type:"ROLES",payload:{rol:respuesta.data.rol}})  
            }catch(e){
                console.log(e.message)
            }
        }
    },

    inicioSesion:async (usuario) =>{
        try{
            const respuesta = await axios.post("http://localhost:4000/api/inicioSesion",{...usuario})
            if(respuesta.data.success && !respuesta.data.error){
                localStorage.setItem("token", respuesta.data.response.token)
            }else{
                return {error: [respuesta.data.error]}
                
            }

        }catch(e){
            console.log(e.message)
        }
    }
}
export default usuarioAction
