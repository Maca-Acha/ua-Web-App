import React from "react";
import { Link } from "react-router-dom";
const Categorias = () => {
  const categoriasArray = [
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
    {
      nombre: "Nombre",
      foto: "./assets/iconos-01.png",
      url: "/",
    },
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriasArray.map((curso, index) => {
            return (
              <>
                <div>
                  <Link to={curso.url}>
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                      <div className="w-full h-80">
                        <img
                          className="object-center object-cover w-full h-full"
                          src={curso.foto}
                          alt="photo"
                        />
                      </div>
                    </div>
                  </Link>
                  <h2 className="text-white text-xl text-center py-3">
                    {curso.nombre}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categorias;
