import { FaTwitter, FaFacebookF, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-zinc-900">
      <div class="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div class="flex flex-wrap justify-center">
          <ul class="flex items-center space-x-4">
            <li className="text-white cursor-pointer hover:text-purple-600">Inicio</li>
            <li className="text-white cursor-pointer hover:text-purple-600">
                Explorar
                </li>
            <li className="text-white cursor-pointer mx-3 hover:text-purple-600">Biblioteca</li>
          </ul>
        </div>
        <div class="flex justify-center mt-4 lg:mt-0 " >
          <div class="flex sm:justify-center xl:justify-start cursor-pointer">
            <div class="w-10 h-10 border-2 border-purple-600 rounded-full text-white hover:bg-purple-600">
              <div className="flex justify-center items-start">
                <FaTwitter className="mt-2.5" />
              </div>
            </div>
          </div>

          <div class="flex sm:justify-center xl:justify-start mx-3 cursor-pointer">
            <div class="w-10 h-10 border-2 border-purple-600 rounded-full text-white hover:bg-purple-600">
              <div className="flex justify-center items-start">
                <FaFacebookF className="mt-2.5" />
              </div>
            </div>
          </div>

          <div class="flex sm:justify-center xl:justify-start cursor-pointer">
            <div class="w-10 h-10 border-2 border-purple-600 rounded-full text-white hover:bg-purple-600">
              <div className="flex justify-center items-start">
                <FaInstagram className="mt-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
