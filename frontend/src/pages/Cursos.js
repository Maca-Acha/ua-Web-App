import React from "react";
import Categoria from "../components/Categoria";
const Cursos = () => {
  return (
    <>
      <div>
        <div>
        <div className="text-center pb-12">
          <h1 className="font-bold mt-32 text-3xl md:text-4xl lg:text-5xl font-heading text-white">
          Categorías Principales
          </h1>
        </div>
          <Categoria />
        </div>
      </div>
    </>
  );
};

export default Cursos;
