import { connect } from "react-redux";
import { useState, useRef } from "react";
import usuarioAction from "../redux/actions/usuarioAction";
import cursosAction from "../redux/actions/cursosAction";


const Opinion = (props) => {
  const input = useRef();
  const [modoEditar, setModoEditar] = useState(false);

  console.log(props.opinion._id);

  const opinionBorrada = async () => {
    let borrarOpinionObj = {
      cursoId: props.id,
      opinionId: props.opinion._id,
    };

    let res = await props.borrarOpinion(borrarOpinionObj);

    if (res.success) {
      props.traerOpiniones();
      props.traerCursos();
    }

    console.log("comentario borrado");
  };

  const terminarEditar = async () => {
    let x = {
      opinionId: props.opinion._id,
      opinion: input.current.value,
    };
    console.log(x);
    const res = await props.editarOpinion(x);

    if (res.success) {
      props.traerCursos();
      setModoEditar(!modoEditar);
    }
  };

  console.log(props);
  return (
    <>
      <div className="overflow-y-scroll p-2 scrollbarcomments w-full">
        <div className="bg-transparent  w-full border-2 border-white py-2 px-3 rounded-lg rounded-r-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              {props.usuarios.length > 1 &&
                props.usuarios.map((usuario, index) =>
                  usuario.id === props.opinion.usuarioId ? (
                    <span
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(${usuario.foto})`,
                      }}
                      key={index}
                      className="w-14 h-14 flex items-center justify-center font-bold  rounded-full"
                    ></span>
                  ) : null
                )}
              {props.usuarios.length > 1 &&
                props.usuarios.map((usuario, index) =>
                  usuario.id === props.opinion.usuarioId ? (
                    <span className="fw-bold text-white text-2xl pl-5">
                      {usuario.nombre} {usuario.apellido}
                    </span>
                  ) : null
                )}
            </div>

            <div className="flex">
              {props.opinion.usuarioId === props.usuario._id ? (
                <>
                  <span onClick={() => setModoEditar(!modoEditar)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                  <span onClick={() => opinionBorrada()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                </>
              ) : null}
            </div>
          </div>

          <div name="comentarios" className="">
            {modoEditar ? (
              <>
                <div className="flex flex-col pl-20">
                  <input
                    ref={input}
                    defaultValue={props.opinion.opinion}
                    className="mt-2 mb-1 py-2 rounded-full text-gray-900 pl-5 bg-white w-full focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-900"
                  />
                  <div className="mt-2">
                    <button
                      className="inline-flex bg-white text-gray-900 rounded-full h-6 px-3 justify-center items-center py-3"
                      onClick={() => terminarEditar()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit comment
                    </button>

                    <button
                      className="inline-flex bg-rose-600 text-white rounded-full h-6 px-3 justify-center items-center ml-3 py-3"
                      onClick={() => setModoEditar(!modoEditar)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-white py-3 pl-20 text-xl text-left fw-bold">
                {props.opinion.opinion}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cursos: state.cursosReducer.cursos,
    usuarios: state.reducer.usuarios,
    usuario: state.reducer.usuario,
  };
};

const mapDispatchToProps = {
  traerUsuarios: usuarioAction.traerUsuarios,
  borrarOpinion: cursosAction.borrarOpinion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Opinion);
