// src/Anime.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import animes from "../../data/AnimeList.json";

function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null); // Estado para almacenar el anime encontrado
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const numericId = Number(id);

    // Busca el anime por ID
    const foundAnime = animes.find((anime) => anime.id === numericId);
    console.log("ID buscado:", id);
    if (foundAnime) {
      setAnime(foundAnime); // Guarda el anime en el estado
    }

    setLoading(false); // Desactiva el estado de carga
  }, [id]);

  if (loading) {
    // Mostrar mientras se está cargando
    return (
      <div className="flex justify-center items-center h-screen w-full bg-light-purple">
        Cargando...
      </div>
    );
  }

  if (!anime) {
    // Mensaje si no se encuentra el anime
    return (
      <div className="flex justify-center items-center h-screen w-full bg-light-purple">
        Anime no encontrado.
      </div>
    );
  }

  // Calcular el total de episodios
  const totalEpisodes = anime.episodes_per_season.reduce((a, b) => a + b, 0);

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-white rounded-2xl drop-shadow-lg overflow-hidden">
        {/* Título */}
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          {anime.title}
        </h1>

        {/* Contenido principal */}
        <div className="flex-grow overflow-auto flex flex-col py-4 items-center">
          <div className="flex flex-col md:flex-row items-start w-full px-4 gap-4">
            {/* Imagen del anime */}
            <img
              src={anime.image}
              alt={anime.title}
              className=" rounded-lg aspect-video w-full md:w-1/3 object-cover bg-center shadow-md"
            />
            {/* Información del anime */}
            <div className="p-4 h-full bg-gray-50 border border-gray-300 rounded-lg shadow-md flex-grow">
              <p className="text-lg">
                <strong>Platforms:</strong> {anime.platforms.join(", ")}
              </p>
              <p className="text-lg mt-2">
                <strong>Years:</strong> {anime.year_started} -{" "}
                {anime.year_ended || "En emisión"}
              </p>
              <p className="text-lg mt-2">
                <strong>Seasons:</strong> {anime.seasons}
              </p>
              <p className="text-lg mt-2">
                <strong>Episodes per season:</strong>{" "}
                {anime.episodes_per_season.join(", ")}
              </p>
              <p className="text-lg mt-2">
                <strong>Total number of episodes:</strong> {totalEpisodes}
              </p>
              <p className="text-lg mt-2">
                {" "}
                <strong>Rating:</strong> {anime.rating}/10
              </p>
            </div>
          </div>

          {/* Rating */}

          <div className="w-full px-4 py-6">
            <div className="flex flex-wrap justify-center gap-2 rounded-lg border border-gray-300 p-4 box-border bg-gray-50 w-full">
              {anime.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          {/* Descripción */}
          <div className="p-4 mx-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
            <p className="text-lg">
              <strong>Description:</strong> {anime.description}
            </p>
          </div>
          {/* Géneros */}
        </div>
      </div>
    </div>
  );
}

export default Anime;
