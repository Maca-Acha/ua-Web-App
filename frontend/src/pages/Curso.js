import React, { useState, useEffect } from "react";
import Opiniones from "../components/Opiniones";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import cursosAction from "../redux/actions/cursosAction";
import usuarioAction from "../redux/actions/usuarioAction";
import { connect } from "react-redux";
const Curso = (props) => {
  const params = useParams();

  console.log(params);

  const id = params.id;
  console.log(props);
  console.log(id);

  const [item, setItem] = useState("descripcion");

  const [fav, setFav] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    props.traerCursos();

    props.obtenerRoles()
  }, []);

  console.log(props.usuario._id);
  const cursoId = props.cursos.find((curso) => curso._id === id);

  console.log(props.cursos);
  console.log(props.usuarios);

  console.log("id del curso");
  console.log();
  return (
    <>
      {cursoId && (
        <>
          <div className="w-full mt-20 vh-70 flex flex-col md:flex-row items-center">
            <ReactPlayer
              url={cursoId.url}
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              volume={0.7}
              playsinline={true}
            />
          </div>

          <div className="bg-transparent w-full h-20 flex flex-col md:flex-row">
            <div className="flex w-full md:w-6/12 flex-col md:flex-row">
              <div
                className={`${
                  item === "descripcion"
                    ? "bg-rose-600 md:bg-transparent md:border-b-8 md:border-rose-600"
                    : ""
                } flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full`}
                onClick={() => setItem("descripcion")}
              >
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center font-heading text-white cursor-pointer">
                  Descripción general
                </h2>
              </div>

              <div
                className={`${
                  item === "opiniones"
                    ? "bg-rose-600 md:bg-transparent md:border-b-8 md:border-rose-600"
                    : ""
                } flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full`}
                onClick={() => setItem("opiniones")}
              >
                <h2
                  className={` font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white`}
                >
                  Opiniones
                </h2>
              </div>
            </div>

            <div className="flex w-full md:w-6/12 flex-col md:flex-row">
              <div
                className={`${
                  item === "notas"
                    ? "bg-rose-600 md:bg-transparent md:border-b-8 md:border-rose-600"
                    : ""
                } flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full`}
                onClick={() => setItem("notas")}
              >
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-white">
                  Notas
                </h2>
              </div>

              <button
                className={`flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full transition-all `}
                onClick={() => setFav(!fav)}
              >
                <span className="font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white ">
                  {fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                </span>
                <span className="pl-2 ">
                  <svg
                    className="w-8 h-8"
                    fill={`${fav ? "#facc15" : "none"} `}
                    stroke={`${fav ? "#facc15" : "#fff"} `}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {item === "descripcion" && (
            <div className="h-full mt-56 md:mt-0 w-full bg-transparent mb-20">
              <div className="px-5 md:px-0">
                <h2 className="text-white text-4xl mt-16 font-bold md:pl-16">
                  Acerca de este curso
                </h2>

                <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl">
                  {cursoId.acerca}
                </p>
              </div>

              <div className="border-b-2 border-white md:mx-16 mt-6"></div>

              <div className="my-5 px-5 md:px-0">
                <h2 className="text-white text-4xl  font-bold md:pl-16">
                  Descripción
                </h2>
                <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl">
                  {cursoId.descripcion}
                </p>
              </div>

              <div className="border-b-2 border-white md:mx-16 mt-6"></div>

              <div className="my-5 px-5 md:px-0">
                <h2 className="text-white text-4xl  font-bold md:pl-16">
                  Instructor
                </h2>
                <div className="flex items-center">
                  <div
                    className="h-16 w-16 rounded-full md:ml-16 mt-5 "
                    style={{
                      backgroundImage: `url(${cursoId.tutor.foto})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <p className="text-white ml-5 pt-5 text-xl md:max-w-7xl font-bold">
                    {`${cursoId.tutor.nombre} ${cursoId.tutor.apellido}`}
                  </p>
                </div>
              </div>
            </div>
          )}

          {item === "opiniones" && (
            <div className="h-full mt-56 md:mt-0 w-full bg-transparent">
              <div className="w-full">
                <div className="px-5 md:px-0">
                  <h2 className="text-white text-4xl mt-16 font-bold md:pl-16 text-center md:text-left">
                    Opina sobre este curso
                  </h2>

                  <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl text-center md:text-left">
                    Los alumnos opinan ...
                  </p>
                </div>

                <div className=" md:pl-8">
                  <Opiniones id={id} opiniones={cursoId.opiniones} />
                </div>
              </div>
            </div>
          )}

          {item === "notas" && (
            <div className="h-full mt-56 md:mt-0 w-full bg-transparent mb-20">
              <div className="px-5 md:px-0">
                <h2 className="text-white text-4xl mt-16 font-bold md:pl-16">
                  Nota 1
                </h2>

                <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl">
                  Excepteur esse qui eiusmod Lorem consectetur officia non velit
                  voluptate sunt et reprehenderit culpa incididunt.
                </p>
              </div>

              <div className="border-b-2 border-white md:mx-16 mt-6"></div>

              <div className="my-5 px-5 md:px-0">
                <h2 className="text-white text-4xl  font-bold md:pl-16">
                  Nota 2
                </h2>
                <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl">
                  {" "}
                  Voluptate laboris nostrud culpa nisi enim dolore. Id deserunt
                  proident consequat laboris nisi laboris{" "}
                </p>
              </div>

              <div className="border-b-2 border-white md:mx-16 mt-6"></div>

              <div className="my-5 px-5 md:px-0">
                <h2 className="text-white text-4xl  font-bold md:pl-16">
                  Recursos
                </h2>
                <p className="text-white md:pl-16 pt-5 text-xl md:max-w-7xl">
                  {" "}
                  Visual Studio Code{" "}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cursos: state.cursosReducer.cursos,
    usuario: state.reducer.usuario,
    usuarios: state.reducer.usuarios,
  };
};

const mapDispatchToProps = {
  traerCursos: cursosAction.traerCursos,
  obtenerRoles: usuarioAction.obtenerRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Curso);
