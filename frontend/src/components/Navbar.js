import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import "animate.css";
import { Link } from "react-router-dom";
import "../index.css";
import MenuResponsive from "./MenuResponsive";

function Navbar() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      const text = document.querySelector(".color-text");
      const text2 = document.querySelector(".color-text-2");
      const menuIcon = document.querySelector(".menuIcon");

      header.classList.toggle("active", window.scrollY > 10);
      text.classList.toggle("active", window.scrollY > 10);
      text2.classList.toggle("active", window.scrollY > 10);
      menuIcon.classList.toggle("active", window.scrollY > 10);
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
                        src="./assets/logo-white.png"
                        alt="UA"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-3 inline-flex items-center justify-center menuIcon hover:text-violet-900 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 sticky">
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
                  <div className="flex pr-24">
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
                <div className="rounded-lg shadow-md bg-violet-600 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-4 pt-4 flex items-center justify-between">
                    <div className="">
                      <img
                        className="h-8 w-auto"
                        src="./assets/logo-white.png"
                        alt="UA"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-violet-300 focus:outline-none">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-8 w-8 " aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1 flex items-center justify-center flex-col ">
                    <Link
                      to="/"
                      className="text-gray-50 text-xl text-center font-bold hover:text-violet-400"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/cursos"
                      className="text-gray-50 text-xl font-bold hover:text-violet-400"
                    >
                      Cursos
                    </Link>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <Link
                      to="/iniciarsesion"
                      className="block w-full py-3 text-center font-medium text-white bg-violet-400   hover:bg-violet-700 hover:font-bold"
                    >
                      Iniciar Sesion
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full py-3 text-center font-medium text-white bg-violet-400 hover:bg-violet-700 hover:font-bold"
                    >
                      Registrarse
                    </Link>
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

export default Navbar;
