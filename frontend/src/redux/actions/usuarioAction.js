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
    }
}
export default usuarioAction
