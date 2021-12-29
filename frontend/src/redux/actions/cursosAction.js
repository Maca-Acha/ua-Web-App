import axios from "axios";

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
  favoritos: (usuarioId, cursoId) => {
    return async (dispatch, getState) => {
      if (usuarioId && cursoId) {
        await axios.put("http://localhost:4000/api/like/", {
          usuarioId,
          cursoId,
        });
        let response = await axios.get(
          "http://localhost:4000/api/cursoUsuarioId",
          { usuarioId }
        );
        dispatch({ type: "FAVORITOS", payload: response.data.response });
      } else {
        console.log("error");
      }
    };
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
  editarOpinion: (opinionEditada) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.put(
          "http://localhost:4000/api/opiniones",
          { ...opinionEditada },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        return { success: true };
      } catch (error) {
        return { error: error };
      }
    };

    // return async (dispatch, getState) => {
    //   const token = localStorage.getItem("token");
    //   await axios.put(
    //     "http://localhost:4000/api/opiniones",
    //     { opinionId, opinion },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   let res = await axios.get("http://localhost:4000/api/opiniones");
    //   dispatch({ type: "CURSOS", payload: res.data.response });
    // };
  },
  borrarOpinion: (borrarOpinion) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          "http://localhost:4000/api/opiniones",

          {
            data: borrarOpinion,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return { success: true };
      } catch (error) {
        return { error: error };
      }
    };

    // return async (dispatch, getState) => {
    //   const token = localStorage.getItem("token");
    //   await axios.delete(
    //     "http://localhost:4000/api/opiniones",
    //     { cursoId, opinionId },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   let res = await axios.get("http://localhost:4000/api/opiniones");
    //   dispatch({ type: "CURSOS", payload: res.data.response });
    // };
  },
};

export default cursosAction;
