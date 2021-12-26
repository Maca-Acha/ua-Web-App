const CursoTarjeta = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-violet-600">
        <img
          className=""
          src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Sunset in the mountains"
        />
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-violet-600 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-violet-600 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-violet-600 mr-2 mb-2">
            #winter
          </span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">The Coldest Sunset</div>
          <p className="text-base  text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        <button className="mt-3 w-full bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-violet-600 hover:bg-gray-500 hover:text-white">

          Ver más
        </button>
        </div>
        
      </div>
    </>
  );
};

export default CursoTarjeta;
