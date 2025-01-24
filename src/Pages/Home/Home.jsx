// src/Home.js
import HomeCardsList from "../../Components/Lists/HomeCardsList";
import { useState, useEffect } from "react";
function Home() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      try {
        const response = await fetch(`${API_BASE_URL}/api/anime`);
        const Data = await response.json();
        setAnimes(Data);
      } catch (error) {
        console.error("Error al obtener los animes:", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-start items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] rounded-2xl drop-shadow-lg overflow-hidden bg-white">
        <h1 className="text-3xl font-bold w-full border  py-4 text-center bg-white z-10 shadow-md">
          My List
        </h1>{" "}
        <input
          type="text"
          name="input"
          id="home_input"
          className=" focus:outline-hidden text-onix placeholder:text-gray-400 rounded-xl w-4/5 px-4 py-2 my-6 border-2 border-gray-300"
          placeholder="Search for a anime"
        />
        <section className="flex-1 w-full flex flex-wrap justify-center gap-4 p-4 overflow-auto">
          <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
            <HomeCardsList title="Seasonal Anime" items={animes} />
          </div>
          <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
            <HomeCardsList title="Popular Anime" items={animes} />
          </div>
          <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
            <HomeCardsList title="My Favorites" items={animes} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
