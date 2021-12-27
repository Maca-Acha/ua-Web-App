import CourseCard from "./CursoTarjeta";
import Flyer from "./Flyer";
import usuarioAction from "../redux/actions/usuarioAction";
import {connect} from "react-redux";

const Main = (props) => {
  props.obtenerRoles()
  return (
    <div className="mt-32 ">
      <div className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-violet-600">
              Universidad Autodidacta
            </span>{" "}
            <br className="hidden xl:block" />
            <span className="block  xl:inline text-white">
              estudia con nosotros
            </span>
          </h1>
          <p className="mt-3 text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 ">
            Un monton de cursos al alcance de un clic, con una gran variedad de
            temas, desde la programación hasta la matemática.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10"
              >
                Ver Cursos
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
              >
                Lo mas popular
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex justify-center items-center">
        <div className="text-center mb-20">
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-white">
              Una amplia selección de cursos
            </span>
          </h1>
          <p className="mt-3 text-center text-gray-500 sm:mt-5 sm:mx-auto md:mt-5 ">
            Elige entre más de XX cursos en video y en línea con nuevo contenido
            cada mes
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-white text-center text-4xl  tracking-tight font-bold sm:text-2xl md:text-4xl">
          Amplia tus oportunidades aprendiendo programación!
        </h2>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>

      <Flyer />

      <section>
        <h2 className="text-white text-center text-4xl tracking-tight font-bold sm:text-2xl md:text-4xl px-4">
          Saca al artista de tu interior con estos cursos
        </h2>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>

      
    </div>
  );
};

const mapDispatchToProps = {
  obtenerRoles: usuarioAction.obtenerRoles
}

export default connect(null, mapDispatchToProps) (Main)
