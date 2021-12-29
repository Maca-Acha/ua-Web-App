import React, { useState } from "react";

const Configuracion = () => {
  const [item, setItem] = useState("infobasica");

  const [fav, setFav] = useState(false);

  const [editar, setEditar] = useState(false);

  return (
    <>
      <div className="bg-transparent w-full mt-32 h-20 flex flex-col md:flex-row">
        <div
          className={`${
            item === "infobasica"
              ? "bg-rose-600 md:bg-transparent md:border-b-8 md:border-rose-600"
              : ""
          } flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full`}
          onClick={() => setItem("infobasica")}
        >
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center font-heading text-white cursor-pointer">
            Mi perfil
          </h2>
        </div>

        <div
          className={`${
            item === "tutor"
              ? "bg-rose-600 md:bg-transparent md:border-b-8 md:border-rose-600"
              : ""
          } flex items-center justify-center py-5 md:py-0 md:w-6/12 h-full`}
          onClick={() => setItem("tutor")}
        >
          <h2
            className={` font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white`}
          >
            Solicitud de tutor
          </h2>
        </div>
      </div>

      {item === "infobasica" && (
        <div className="h-full mt-56 md:mt-0 w-full bg-transparent mb-20">
          <div className="flex mt-16 justify-evenly flex-col md:flex-row">
            <div className="md:w-4/5 flex md:justify-end justify-center">
              <div
                className=" h-80 w-80 rounded-full bg-transparent md:pl-24 md:mr-32 my-12"
                style={{
                  // backgroundImage: `url(${props.usuario.foto})`,
                  backgroundImage: `url(https://fondosmil.com/fondo/53619.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="container">
              <div className="flex justify-center px-6 my-12">
                <div className="w-full flex">
                  <div className="w-full lg:w-7/12">
                    {editar ? (
                      <form className="">
                        <div className="mb-4 md:flex w-full">
                          <div className="mb-4 md:mr-2 md:mb-0 md:w-2/4">
                            <label className="block mb-2 text-xl font-bold text-white">
                              Nombre
                            </label>
                            <input
                              className="w-full px-3 py-2 text-xl leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Nombre"
                            />
                          </div>
                          <div className="md:ml-2 md:w-2/4">
                            <label className="block mb-2 text-xl font-bold text-white">
                              Apellido
                            </label>
                            <input
                              className="w-full px-3 py-2 text-xl leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Apellido"
                            />
                          </div>
                        </div>
                        <div className="mb-4 ">
                          <label className="block mb-2 text-xl font-bold text-white ">
                            Email
                          </label>
                          <input
                            className="w-full px-3 py-2 mb-3 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="mb-4 ">
                          <label className="block mb-2 text-xl font-bold text-white ">
                            Foto de perfil
                          </label>
                          <input className="w-full px-3 py-2 mb-3 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex justify-between">
                          <button
                            className="p-2 pl-5 pr-5 bg-transparent border-2 border-rose-500 text-rose-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-rose-500 hover:text-gray-100 focus:border-4 focus:border-rose-300"
                            onClick={() => setEditar(!editar)}
                          >
                            Terminar
                          </button>

                          <button
                            className=" p-2 pl-5 pr-5 bg-transparent border-2 border-rose-500 text-rose-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-rose-500 hover:text-gray-100 focus:border-4 focus:border-rose-300"
                            onClick={() => setEditar(!editar)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="">
                        <div className="mb-4 md:flex w-full">
                          <div className="mb-4 md:mr-2 md:mb-0 md:w-2/4">
                            <p className="block mb-2 text-xl font-bold text-white">
                              Nombre
                            </p>
                            <p
                              className="w-full px-3 py-2 text-xl font-bold leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Nombre"
                            >
                              {" "}
                              Miles{" "}
                            </p>
                          </div>
                          <div className="md:ml-2  md:w-2/4">
                            <label className="block mb-2 text-xl font-bold text-white">
                              Apellido
                            </label>
                            <p
                              className="w-full px-3 py-2 text-xl font-bold leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Nombre"
                            >
                              {" "}
                              Morales{" "}
                            </p>
                          </div>
                        </div>
                        <div className="mb-4 ">
                          <label className="block mb-2 text-xl font-bold text-white ">
                            Email
                          </label>
                          <p
                            className="w-full px-3 py-2 mb-3 text-xl leading-tight text-white font-bold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                          >
                            {" "}
                            milesmorales@spidy.web
                          </p>
                        </div>

                        <div className="mb-4 max-w-7xl">
                          <label className="block mb-2 text-xl font-bold text-white ">
                            Foto de perfil
                          </label>
                          <p className="max-w-7xl px-3 py-2 mb-3 text-xl leading-tight text-white font-bold border rounded shadow appearance-none focus:outline-none focus:shadow-outline truncate">
                            https://fondosmil.com/fondo/53619.jpg
                          </p>
                        </div>

                        <div className="flex justify-center md:justify-start">
                          <button
                            className="p-2 mt-5 pl-5 pr-5 bg-transparent border-2 border-rose-500 text-rose-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-rose-500 hover:text-gray-100 focus:border-4 focus:border-rose-300"
                            onClick={() => setEditar(!editar)}
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {item === "tutor" && (
        <div className="w-full my-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-transparent w-full p-8 sm:p-12">
              <p className="text-5xl font-bold text-center text-white">
                Rellene todos los campos
              </p>
              <form>
                <div className="md:flex items-center mt-12">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold text-xl leading-none text-white">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="leading-none text-gray-900 p-3 text-xl focus:outline-none focus:border-rose-700 mt-4 border-0 bg-white rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col text-xl md:ml-6 md:mt-0 mt-4">
                    <label className="font-semibold leading-none text-white">
                      Telefono
                    </label>
                    <input
                      type="email"
                      className="leading-none text-gray-900 text-xl p-3 focus:outline-none focus:border-rose-700 mt-4 border-0 bg-white rounded"
                    />
                  </div>
                </div>

                <div className="md:flex items-center mt-8">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-xl text-white">
                      Seleccione una categoria
                    </label>
                    <select className="leading-none text-gray-900 text-xl p-3 focus:outline-none focus:border-rose-700 mt-4 border-0 bg-white rounded">
                      <option value="">Seleccione una materia</option>
                      <option value="">Seleccione una materia</option>
                      <option value="">Seleccione una materia</option>
                      <option value="">Seleccione una materia</option>
                    </select>
                  </div>
                </div>
                <div className="md:flex items-center mt-8">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-xl text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="leading-none text-gray-900 text-xl p-3 focus:outline-none focus:border-rose-700 mt-4 border-0 bg-white rounded"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="font-semibold text-xl leading-none text-white">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="h-40 leading-none text-xl text-gray-900 p-3 focus:outline-none focus:border-rose-700 mt-4 bg-white border-0 rounded"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-rose-700 rounded hover:bg-rose-600 focus:ring-2 focus:ring-offset-2 focus:ring-rose-700 focus:outline-none">
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Configuracion;
