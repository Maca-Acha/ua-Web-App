import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-transparent border-t-2 border-rose-600">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="h-8 w-auto font-2xl sm:h-10"
                src="https://by3301files.storage.live.com/y4mH5ghEidPfF8io-3hp7rZuKY-QlDVXGQnJ6YBGjb22fjHzqhmZMuKrrmQMFwqjiJ1eU5SOfw5ukm-PpvnPN8ma9WbcUmRY-lneLkMt6kL9qeh3OhnJZh6dGcWOkexSArqr4mRAG8hEK2jsKhVAMNlLNIUIjmbMxVSlY6ZqUh5JUM5yNMNET1jYFw_e1PDEwZj?width=1500&height=1500&cropmode=none"
                alt="UA"
              />
            </Link>
            <p className="mt-2 text-xl text-white">Universidad Autodidacta</p>
          </div>

          <div className="flex-grow flex-col md:flex-row flex flex-wrap justify-evenly md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIAS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/categorias" className="text-white hover:text-rose-300" href="#">
                    Programación
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Arte Digital
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Belleza
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Moda
                  </Link>
                </li>
              </nav>
            </div>
            <div className="">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    First Link
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white hover:text-rose-300" href="#">
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-rose-600">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © {new Date().getFullYear()} UA —
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @Grupo F
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="#" className="text-gray-200 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200 cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
