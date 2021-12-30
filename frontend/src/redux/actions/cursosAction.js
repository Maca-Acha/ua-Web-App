import axios from "axios";
import { toast } from "react-toastify"

const cursosAction = {
  filtroCursos: (cursos, value) => {
    return (dispatch, getState) => {
      dispatch({ type: "FILTRO_CURSOS", payload: { cursos, value } });
    };
  },
  traerCursos: () => {
    return async (dispatch, getState) => {
      let respuesta = await axios.get("http://localhost:4000/api/cursos");
      dispatch({ type: "CURSOS", payload: respuesta.data.response });
    };
  },
  traerCursoId: (cursoId) => {
    return async (dispatch, getState) => {
      let respuesta = await axios.get(
        "http://localhost:4000/api/curso/" + cursoId
      );
      dispatch({ type: "CURSO_ID", payload: respuesta.data.response });
    };
  },
  favoritos: (fav)=>{
    return async(dispatch,getState)=>{
      const token = localStorage.getItem("token")
      try{
        await axios.put("http://localhost:4000/api/favoritos",{...fav}, {
          headers:{
            Authorization:"bearer " + token
          }
        })
        return{success:true}
      }catch {
          toast.warning("Debes Iniciar sesion para poder añadir a Favoritos", {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    }      
  },
  traerCursosFav:(usuarioId) => {
    return async (dispatch, gatState) => {
      let respuesta = await axios.get("http://localhost:4000/api/cursoUsuario/" + usuarioId)
      dispatch({type: "CURSOS_FAV", payload: respuesta.data.response})
    }
  },
  crearOpinion: (opinion) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:4000/api/opiniones",
          { ...opinion },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        return { success: true };
      } catch (error) {
        return { error: error };
      }
    };
  },
  traerOpiniones: () => {
    return async (dispatch, getState) => {
      let respuesta = await axios.get("http://localhost:4000/api/opiniones");
      dispatch({ type: "CURSOS", payload: respuesta.data.response });
    };
  },
  editarOpinion: (opinionId, opinion) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:4000/api/opiniones",
        { opinionId, opinion },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let res = await axios.get("http://localhost:4000/api/opiniones");
      dispatch({ type: "CURSOS", payload: res.data.response });
    };
  },
  borrarOpinion: (cursoId, opinionId) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");
      await axios.delete(
        "http://localhost:4000/api/opiniones",
        { cursoId, opinionId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let res = await axios.get("http://localhost:4000/api/opiniones");
      dispatch({ type: "CURSOS", payload: res.data.response });
    };
  },
};

export default cursosAction;
