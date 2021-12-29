import { connect } from "react-redux";
import { useState, useRef } from "react";

const Opinion = (props) => {
  const input = useRef()
  const [modoEditar, setModoEditar] = useState(false);
  const borrarOpinion= () => {
    props.borrarOpinion(props.id, props.opinion._id)
  }

  function editarOpinion() {
      let opinionEditada = {
        opinion:input.current.value
      }
      props.editarOpinion(props.opinion._id, opinionEditada)
  } 


  return (
    <>
      <div className="overflow-y-scroll p-2 scrollbarcomments w-full">
        <div className="bg-transparent  w-full border-2 border-white py-2 px-3 rounded-lg rounded-r-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <span
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2015/08/mono-titi.jpg?fit=640%2C360&quality=80&ssl=1)`,
                }}
                className="w-14 h-14 flex items-center justify-center font-bold rounded-full"
              ></span>

              <span className="fw-bold text-white text-2xl pl-5">
                Mono titi
              </span>
            </div>

            <div className="flex">
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
              <span onClick={() => borrarOpinion()}>
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
            </div>
          </div>

          <div name="comentarios" className="">
            {modoEditar ? (
              <>
                <div className="flex flex-col pl-20">
                  <input 
                  ref= {input}
                  defaultValue={props.opinion}
                  className="mt-2 mb-1 py-2 rounded-full text-gray-900 pl-5 bg-white w-full focus:outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-900" />
                  <div className="mt-2">
                    <button className="inline-flex bg-white text-gray-900 rounded-full h-6 px-3 justify-center items-center py-3"
                    onClick={() => editarOpinion()}>
                    
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

                    <button className="inline-flex bg-rose-600 text-white rounded-full h-6 px-3 justify-center items-center ml-3 py-3"
                     onClick={() => setModoEditar(!modoEditar)}>
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
                Que ganas de comerme una ensalada de frutas owo aa aaaa aaa aaaa
                aaa
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
    cursos: state.cursosReducer.cursos
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Opinion);
