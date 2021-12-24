import { FaPlay, FaRegHeart, FaHeart } from "react-icons/fa";
const CardHome = () => {
  return (
    <div className="bg-zinc-900 p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-auto rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
      <div
        style={{
          background:
            "url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
        className="h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
      ></div>
      <div className="flex sm:flex-1 flex-col gap-2 p-1">
        <h3 className="text-lg sm:text-xl font-semibold  text-white">
          Titulo
        </h3>
        <p className="text-white text-sm sm:text-base line-clamp-3">
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-4 mt-auto">
          <button className="flex items-center gap-1 sm:text-lg text-white px-3 py-1 rounded-full  transition-colors  focus:outline-none focus-visible:border-gray-500">
            
            {true ? <FaHeart /> : <FaRegHeart />}
            <span>556</span>
          </button>
          <button className="ml-auto flex items-center gap-1 sm:text-lg text-purple-600 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
            <span><FaPlay /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
