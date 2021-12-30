import { PlayIcon, DeviceMobileIcon, StarIcon } from "@heroicons/react/outline";

const Flyer = () => {
  return (
    <>
      <div className="border-t-2 border-rose-600 px-28 w-full"></div>
      <section>
        <div className="flex justify-center items-center p-14">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="flex justify-center items-center flex-col">
              <PlayIcon className="w-auto h-24 text-white mb-2" />
              <p className="text-white text-center text-xl tracking-tight font-bold sm:text-xl md:text-2xl max-w-sm">
                Aprende habilidades a tu ritmo con más de XX cursos en video
              </p>
            </div>

            <div className="flex justify-center items-center flex-col md:mx-16">
              <StarIcon className="w-auto h-24 text-white mb-2" />
              <p className="text-white text-center text-xl  tracking-tight font-bold sm:text-xl md:text-2xl max-w-sm">
                Mira cursos impartidos por expertos del mundo real y obten un
                empleo
              </p>
            </div>

            <div className="flex justify-center items-center flex-col">
              <DeviceMobileIcon className="w-auto h-24 text-white mb-2" />
              <p className="text-white text-center text-xl  tracking-tight font-bold sm:text-xl md:text-2xl max-w-sm">
                Aprende a tu ritmo, con acceso de por vida desde ordenadores o
                dispositivos móviles
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t-2 border-rose-600 px-28 w-full mb-12"></div>
    </>
  );
};

export default Flyer;