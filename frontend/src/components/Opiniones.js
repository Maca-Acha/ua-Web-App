import { connect } from "react-redux";
import cursosAction from "../redux/actions/cursosAction";
import usuarioAction from "../redux/actions/usuarioAction";
import Opinion from "./Opinion";
import { useRef } from "react";
import Swal from "sweetalert2";

const Opiniones = ({
  id,
  usuario,
  crearOpinion,
  traerCursos,
  opiniones,
  traerUsuarios,
  traerCursoId,
  editarOpinion
}) => {
  const input = useRef();


  const dejarOpinion = async () => {
    let opiniones = {
      cursoId: id,
      opinion: input.current.value,
    };
    const opinionAgregada = await crearOpinion(opiniones);
    input.current.value = "";

    if (opinionAgregada.success) {
      traerCursos()
      traerCursoId(id)
    }
  };
  traerUsuarios();


  return (
    <>
      <div className="bg-transparent p-5 rounded-lg flex flex-col justify-start items-start ">
        <div className="overflow-y-scroll h-96 w-full p-2 scrollbarcomments">
          {opiniones.length > 0
            ? opiniones.map((opinion, index) => {
                return <Opinion key={index} opinion={opinion} id={id} editarOpinion={editarOpinion} traerCursos={traerCursos} />;
              })
            : null}
        </div>

        {/* INPUT */}
        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded-lg mb-4 mt-3">
          <label className="flex -mr-px justify-center w-15 p-2" name="comment">
            <span className="flex items-center leading-normal  rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#111827"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </label>
          <input
            disabled={!usuario._id ? true : false}
            ref={input}
            type="text"
            className="flex-shrink flex-grow text-gray-900 bg-white rubik leading-normal w-px  border-0 h-10 border-grey-light px-3 self-center relative  font-roboto text-base outline-none placeholder-gray-600"
            placeholder="Escribe tu opinion ..."
          />
          <div className="flex -mr-px bg-white  rounded-r-lg">
            <span
              className="flex items-center leading-normal border-0 px-3 whitespace-no-wrap text-gray-900"
              onClick={() => {
                if(!usuario._id){
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-right",
                    showConfirmButton: false,
                    timer: 3000,
                    background: "#be123c",
                    iconColor: "#fff",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener(
                            "mouseenter",
                            Swal.stopTimer
                        );
                        toast.addEventListener(
                            "mouseleave",
                            Swal.resumeTimer
                        );
                    },
                });
                Toast.fire({
                    icon: "error",
                    title: `<span style="color:#FFF"> Debes estar registrado para dejar tu opinion! <span>`,
                })
                }else{
                  dejarOpinion()
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-right",
                    showConfirmButton: false,
                    timer: 3000,
                    background: "#be123c",
                    iconColor: "#fff",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener(
                            "mouseenter",
                            Swal.stopTimer
                        );
                        toast.addEventListener(
                            "mouseleave",
                            Swal.resumeTimer
                        );
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: `<span style="color:#FFF"> Opinion agregada! <span>`,
                })
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer rotate-90"
                viewBox="0 0 20 20"
                fill="#111827"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.reducer.usuario,
    curso: state.cursosReducer.curso,
    cursos: state.cursosReducer.cursos,
  };
};

const mapDispatchToProps = {
  crearOpinion: cursosAction.crearOpinion,
  editarOpinion: cursosAction.editarOpinion,
  traerOpiniones: cursosAction.traerOpiniones,
  traerUsuarios: usuarioAction.traerUsuarios,
  traerCursos: cursosAction.traerCursos,
  traerCursoId: cursosAction.traerCursoId
};

export default connect(mapStateToProps, mapDispatchToProps)(Opiniones);