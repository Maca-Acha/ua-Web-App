import React, { useEffect } from "react";
import cursosAction from "../redux/actions/cursosAction";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import usuarioAction from "../redux/actions/usuarioAction";

const Cursos = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    
    props.traerCursos();
    props.obtenerRoles();
  }, []);

  return (
    <>
      <section className="mt-32">
        <h2 className="font-bold mt-16 text-center text-3xl md:text-4xl lg:text-5xl font-heading text-white">
          Todos los cursos
        </h2>

        <div className="flex justify-center items-center md:items-baseline flex-col md:flex-row mt-10">
          <div className="mr-0 md:mr-32 mb-5 md:mb-0">
            <input
            onChange={(e)=> props.filtroCursos(e.target.value)}
              type="text"
              placeholder="Buscar un curso"
              className="text-center w-80 bg-white appearance-none border-2 border-red-900 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
            />
          </div>

          <div className="flex justify-evenly items-center">
            <label className="text-white text-xl pr-10">Categoría:</label>
            <select
              className=" text-red-600 h-10 px-10 outline-none scrollbarcomments rounded-lg w-full"
              placeholder="Selecciona una categoría"
            >
              <option className="px-10" value="">
                Todas
              </option>
              <option className="px-10" value="">
                Musica
              </option>
              <option className="px-10" value="">
                Arte Digital
              </option>
              <option className="px-10" value="">
                Programacion
              </option>
              <option className="px-10" value="">
                Moda
              </option>
              <option className="px-10" value="">
                Belleza
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {props.auxiliar.map((curso, index) => {
              return (
                <>
                  <div
                    className="max-w-sm rounded flex flex-col justify-between pb-5 overflow-hidden shadow-lg bg-rose-500"
                    key={index}
                  >
                    <div>
                      <div
                        className="w-full h-60"
                        style={{
                          backgroundImage: `url(${curso.foto})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>

                      <div className="px-6 pt-4 pb-2 flex justify-evenly items-center">
                        {curso.hashtag.map((hashtag, index) => {
                          return (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
                              #{hashtag}
                            </span>
                          );
                        })}
                      </div>

                      <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2 text-white">
                          {curso.titulo}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <Link
                        to={`/curso/${curso._id}`}
                        className=" bg-gray-200 text-center rounded-full w-6/12 px-3 py-1 text-md font-semibold text-rose-600 hover:bg-rose-700 hover:text-white"
                      >
                        Ver curso
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cursos: state.cursosReducer.cursos,
    auxiliar: state.cursosReducer.auxiliar
  };
};

const mapDispatchToProps = {
  traerCursos: cursosAction.traerCursos,
  obtenerRoles: usuarioAction.obtenerRoles,
  filtroCursos: cursosAction.filtroCursos
};

export default connect(mapStateToProps, mapDispatchToProps)(Cursos);
