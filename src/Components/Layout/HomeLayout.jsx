// src/Home.js
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-start items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] rounded-2xl drop-shadow-lg overflow-hidden bg-white">
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          Home
        </h1>
        <input
          type="text"
          name="input"
          id="home_input"
          className=" focus:outline-hidden text-onix placeholder:text-gray-400 rounded-xl w-4/5 px-4 py-2 my-6 border-2 border-gray-300"
          placeholder="Search for a anime"
        />
        <section className="flex-1 w-full flex flex-wrap justify-center gap-4 p-4 overflow-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default HomeLayout;
