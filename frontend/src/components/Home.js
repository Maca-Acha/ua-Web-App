import CardHome from "./CardHome";

const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-purple-600 font-bold mt-11 mb-32">
        Home
      </h1>

      <div className="flex flex-col ">
        <div className="flex mb-5 justify-evenly">
          <CardHome />
          <CardHome />
        </div>
        <div className="flex mb-5 justify-evenly">
          <CardHome />
          <CardHome />
        </div>
      </div>
    </>
  );
};

export default Home;
