// src/Home.js
import HomeCardsList from "../../Components/Lists/HomeCardsList";
import { useState, useEffect } from "react";
function Home() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    const fetchAnimes = async () => {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      try {
        const response = await fetch(`${API_BASE_URL}/api/anime`, {
          method: "GET",
          credentials: "include",
        });
        const Data = await response.json();
        setAnimes(Data);
      } catch (error) {
        console.error("Error al obtener los animes:", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
        <HomeCardsList title="Seasonal Anime" items={animes} />
      </div>
      <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
        <HomeCardsList title="Popular Anime" items={animes} />
      </div>
      <div className="flex flex-col w-full md:w-2/5 lg:w-1/4 max-h-[60dvh]">
        <HomeCardsList title="My Favorites" items={animes} />
      </div>
    </>
  );
}

export default Home;
