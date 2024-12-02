// src/Home.js
import HomeCardsList from "../../components/lists/HomeCardsList";
import { useState, useEffect } from "react";

function Home() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/anime");
        const data = await response.json();
        setAnimes(data);
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
          className=" focus:outline-none text-onix placeholder:text-gray-400 rounded-xl w-4/5 px-4 py-2 my-6 border-2 border-gray-300"
          placeholder="Search for a anime"
        />
        <section className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto">
          <HomeCardsList title="Seasonal Anime" items={animes} />
          <HomeCardsList title="Popular Anime" items={animes} />
          <HomeCardsList title="My Favorites" items={animes} />
        </section>
      </div>
    </div>
  );
}

export default Home;
