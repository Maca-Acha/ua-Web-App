import React from "react";
import Categorias from "../components/Categorias";
import CursoTarjeta from "../components/CursoTarjeta";
import Select from "../components/Select";
import usuarioAction from "../redux/actions/usuarioAction";
import {connect} from "react-redux"

const Cursos = (props) => {
  props.obtenerRoles()
  return (
    <>
      <div>
        <div>
          <div className="text-center pb-12">
            <h1 className="font-bold mt-32 text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Categorías Principales
            </h1>
          </div>
          <Categorias  />
        </div>
      </div>
      <section>
        <h2 className="font-bold mt-16 text-center text-3xl md:text-4xl lg:text-5xl font-heading text-white">
          Todos los cursos
        </h2>

        <div className="flex justify-center items-center md:items-baseline flex-col md:flex-row mt-10">
          <div className="mr-0 md:mr-32 mb-5 md:mb-0">
            <input
              type="text"
              placeholder="Buscar un curso"
              className="text-center w-80 bg-white appearance-none border-2 border-red-900 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
            />
          </div>

          <div className="w-50">
            <select
              className="mb-3 text-red-600 h-10 text-center px-16 outline-none scrollbarcomments rounded-lg select w-full"
              placeholder="Selecciona una categoría"
            >
              <option className="text-center px-16" value="">Todos</option>
              <option className="text-center px-16" value="">Musica</option>
              <option className="text-center px-16" value="">Arte Digital</option>
              <option className="text-center px-16" value="">Programacion</option>
              <option className="text-center px-16" value="">Moda</option>
              <option className="text-center px-16" value="">Belleza</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            <CursoTarjeta />
            <CursoTarjeta />
            <CursoTarjeta />
            <CursoTarjeta />
            <CursoTarjeta />
          </div>
        </div>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  obtenerRoles: usuarioAction.obtenerRoles
}
export default connect(null,mapDispatchToProps)(Cursos);
