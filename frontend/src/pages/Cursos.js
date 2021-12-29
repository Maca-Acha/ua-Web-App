import React, { useEffect } from "react";
import Categorias from "../components/Categorias";

import CursoTarjeta from "../components/CursoTarjeta";
import cursosAction from "../redux/actions/cursosAction";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import usuarioAction from "../redux/actions/usuarioAction";

const Cursos = (props) => {
  let cursosArray = [
    {
      titulo: "Curso de React",
      descripcion: "Curso de React",
      foto: "https://i.imgur.com/dZ5xN9q.jpg",
      url: "https://www.youtube.com/watch?v=wTpuKOhGfJE&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=1",
      hastag: ["aprender", "python", "SQLite"],
      id: "12345678",
    },
    {
      titulo: "Curso Maestro de Python 3: Aprende Desde Cero.",
      foto: "https://media.charlesleifer.com/blog/photos/sqlite-and-python.png",
      tutor: "Facundo Techeira",
      descripcion:
        "Aprende a programar con clases y objetos, a usar ficheros y bases de datos SQLite, interfaces gráficas y más con Python!Aprende a programar con clases y objetos, a usar ficheros y bases de datos SQLite, interfaces gráficas y más con Python!",
      hastag: ["aprender", "python", "SQLite"],
      clases: [
        {
          tituloClase: "Bienvenida.",
          url: "https://www.youtube.com/watch?v=AwWPM4Nok7Y&list=PLs-v5LWbw7JkIz8145zh7_ioAnXON_cMj",
        },
        {
          tituloClase: "El entorno del Aprendizaje.",
          url: "https://www.youtube.com/watch?v=jyezRO3oztw&list=PLs-v5LWbw7JkIz8145zh7_ioAnXON_cMj&index=6",
        },
      ],
      id: "1234",
    },
  ];

  useEffect(() => {
    props.traerCursos();
    props.obtenerRoles()
  }, []);

  console.log(props.cursos);
  return (
    <>
      <div>
        <div>
          <div className="text-center pb-12">
            <h1 className="font-bold mt-32 text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Categorías Principales
            </h1>
          </div>
          <Categorias />
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
            {/* <CursoTarjeta /> */}

            {props.cursos.map((curso, index) => {
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
                        {curso.hashtag.map((hashtag) => {
                          return (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
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
  return {
    cursos: state.cursosReducer.cursos,
  };
};

const mapDispatchToProps = {
  traerCursos: cursosAction.traerCursos,
  obtenerRoles: usuarioAction.obtenerRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(Cursos);
