import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import "animate.css";
import { Link } from "react-router-dom";
import "../index.css";
import MenuResponsive from "./MenuResponsive";
import usuarioAction from "../redux/actions/usuarioAction";
import { connect } from "react-redux";

function Navbar(props) {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");

      header.classList.toggle("active", window.scrollY > 10);
    });
  }

  return (
    <header className="fixed z-50 w-full top-0 left-0">
      <div className="w-full overflow-hidden">
        <div className="w-full header ">
          <Popover>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">lucianhoff</span>
                      <img
                        className="h-8 w-auto font-2xl sm:h-10"
                        src="https://by3301files.storage.live.com/y4mzBYeXrSYJZt4WgWCBeBFZgcoVAOgfCBtDJKncLvTMLVnqPfn0fK3ew3CGdxAbaiR0jcsO7xvhHnCg5e-Kv-O_p9TlP_mlwDN3AK1u55ZJPryL_4rU3UZfNXOAO6Hz2nhZMv4zaO48_z4yO-9qK3Rh3bceNch3jWheGRADShznOR8qnLOlAHkBUzN6dWAarLb?width=1500&height=1500&cropmode=none"
                        alt="UA"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-3 inline-flex items-center justify-center menuIcon hover:text-rose-900 hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 sticky">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="w-full hidden md:flex md:justify-between md:ml-10 md:pr-4 md:space-x-8">
                  <div className="inline">
                    <Link to="/" className="color-text text-xl font-bold  pl-5">
                      Inicio
                    </Link>
                    <Link
                      to="/cursos"
                      className="color-text-2 text-xl font-bold  pl-5"
                    >
                      Cursos
                    </Link>
                  </div>
                  <div className="flex pr-24 -mt-2.5">
                    <MenuResponsive className="z-20 absolute" />
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-rose-600 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-4 pt-4 flex items-center justify-between">
                    <div className="">
                      <img
                        className="h-8 w-auto"
                        src="https://by3301files.storage.live.com/y4mzBYeXrSYJZt4WgWCBeBFZgcoVAOgfCBtDJKncLvTMLVnqPfn0fK3ew3CGdxAbaiR0jcsO7xvhHnCg5e-Kv-O_p9TlP_mlwDN3AK1u55ZJPryL_4rU3UZfNXOAO6Hz2nhZMv4zaO48_z4yO-9qK3Rh3bceNch3jWheGRADShznOR8qnLOlAHkBUzN6dWAarLb?width=1500&height=1500&cropmode=none"
                        alt="UA"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-rose-300 focus:outline-none">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-8 w-8 " aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1 flex items-center justify-center flex-col ">
                    <Link
                      to="/"
                      className="text-gray-50 text-xl text-center font-bold hover:text-rose-400"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/cursos"
                      className="text-gray-50 text-xl font-bold hover:text-rose-400"
                    >
                      Cursos
                    </Link>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    {!props.usuario._id ? (
                      <>
                        <Link
                          to="/iniciarsesion"
                          className="block w-full py-3 text-center font-medium text-white bg-rose-400   hover:bg-rose-700 hover:font-bold"
                        >
                          Iniciar Sesion
                        </Link>
                        <Link
                          to="/registrarse"
                          className="block w-full py-3 text-center font-medium text-white bg-rose-400 hover:bg-rose-700 hover:font-bold"
                        >
                          Registrarse
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/favoritos"
                          className="block w-full py-3 text-center font-medium text-white bg-rose-400   hover:bg-rose-700 hover:font-bold"
                        >
                          Mis favoritos
                        </Link>
                        <Link
                          to="/configuracion"
                          className="block w-full py-3 text-center font-medium text-white bg-rose-400 hover:bg-rose-700 hover:font-bold"
                        >
                          Configuración
                        </Link>
                        <button

                          onClick={() => props.cerrarSesion()}
                          className="block w-full py-3 text-center font-medium text-white bg-rose-400 hover:bg-rose-700 hover:font-bold"
                        >
                          Cerrar Sesion
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </header>
  );
}

const mapDispatchToProps = {
  obtenerRoles: usuarioAction.obtenerRoles,
  cerrarSesion: usuarioAction.cerrarSesion,
};

const mapStateToProps = (state) => {
  return {
    usuario: state.reducer.usuario,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
