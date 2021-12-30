import React from "react";
import {connect} from "react-redux"
import cursosAction from "../redux/actions/cursosAction";
import { useEffect } from "react";
import usuarioAction from "../redux/actions/usuarioAction";
import TarjetaCurso from "../components/TarjetaCurso";


const Favoritos = (props) => {
  useEffect(() => {
    props.obtenerRoles()
    props.usuario._id && props.traerCursosFav(props.usuario._id) 
  },[props.usuario._id])

  return (
    <>
      <div className="mt-28 text-rose-600 font-bold text-center text-6xl py-5">
        <p>Mis cursos Favoritos</p>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"></div>
            {props.usuario._id && props.cursosFav[0] && props.cursosFav.map((curso, index) => {
              return (
                <TarjetaCurso curso={curso} index={index} />
              );
            })}
        </div> 
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  return{
    usuario: state.reducer.usuario,
    cursosFav: state.cursosReducer.cursosFav,
  }
}
const mapDispatchToProps = {
  traerCursosFav: cursosAction.traerCursosFav,
  obtenerRoles: usuarioAction.obtenerRoles,
  traerCursos: cursosAction.traerCursos
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
