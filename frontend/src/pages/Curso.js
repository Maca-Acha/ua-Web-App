import React, { useState } from "react";

const Curso = () => {
  //

  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [mostrarOpiniones, setMostrarOpiniones] = useState(false);
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [mostrarRecursos, setMostrarRecursos] = useState(false);

  return (
    <>
      <div className="w-full mt-20 vh-70 flex flex-col md:flex-row items-center">
        <iframe
          className="h-full w-full md:w-9/12"
          src="https://www.youtube.com/embed/1RHDhtbqo94"
          title="Clase"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className=" vh-70  w-full md:w-3/12">
          <h2 className="font-bold mt-2 text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
            Clases
          </h2>
          <p className="font-bold mt-5 text-center text-md md:text-xl lg:text-2xl font-heading text-white">
            {" "}
            Aprendiendo lo que es HTML
          </p>
        </div>
      </div>

      <div className="bg-red-500 w-full h-20 flex ">
        <div className="flex w-full md:w-6/12 flex-col md:flex-row">
          <div
            className="bg-blue-500 flex items-center justify-center  md:w-6/12 h-full"
            onClick={() => {
              setMostrarDescripcion(!mostrarDescripcion);
              setMostrarOpiniones(false);
              setMostrarNotas(false);
              setMostrarRecursos(false);
            }}
          >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center font-heading text-white cursor-pointer">
              Descripción general
            </h2>
          </div>

          <div
            className="bg-green-500 md:w-6/12 h-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              setMostrarDescripcion(false);
              setMostrarOpiniones(!mostrarOpiniones);
              setMostrarNotas(false);
              setMostrarRecursos(false);
            }}
          >
            <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
              Opiniones
            </h2>
          </div>
        </div>

        <div className="flex w-full md:w-6/12 flex-col md:flex-row">
          <div
            className="bg-red-500 flex items-center justify-center  md:w-6/12 h-full"
            
            onClick={() => {
              setMostrarDescripcion(false);
              setMostrarOpiniones(false);
              setMostrarNotas(true);
              setMostrarRecursos(false);
            }}
          >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-white">Notas</h2>
          </div>

          <div
            className="bg-purple-500 md:w-6/12 h-full flex items-center justify-center"
            onClick={() => {
              setMostrarDescripcion(true);
              setMostrarOpiniones(false);
              setMostrarNotas(false);
              setMostrarRecursos(true);
            }}
          >
            <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl font-heading text-white">
              Recursos
            </h2>
          </div>
        </div>
      </div>
      {!mostrarDescripcion && (
        <div className="h-full vh-70 w-full bg-blue-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarOpiniones && (
        <div className="h-full vh-70 w-full bg-green-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarNotas && (
        <div className="h-full vh-70 w-full bg-red-500">
          <span className="invisible"> a </span>
        </div>
      )}

      {mostrarRecursos && (
        <div className="h-full vh-70 w-full bg-purple-500">
          <span className="invisible"> a </span>
        </div>
      )}
    </>
  );
};

export default Curso;
