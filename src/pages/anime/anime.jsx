// src/Anime.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import animes from "../../data/AnimeList.json";
function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null); // Estado para almacenar el anime encontrado
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Simula una carga asíncrona para encontrar el anime
    const foundAnime = animes.find((anime) => anime.id === id);

    if (foundAnime) {
      setAnime(foundAnime); // Guarda el anime en el estado
    }

    setLoading(false); // Desactiva el estado de carga una vez que se ha encontrado el anime
  }, [id]);

  // Mostrar un mensaje de carga mientras el estado `loading` sea verdadero
  if (loading) {
    return (
      <div className="flex justify-center items-center h-dvh w-full bg-light-purple">
        Cargando...
      </div>
    );
  }

  // Verifica si se ha encontrado el anime y lo muestra; si no, muestra un mensaje de error
  if (!anime) {
    return (
      <div className="flex justify-center items-center h-dvh w-full bg-light-purple">
        Anime no encontrado.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start h-dvh w-full bg-light-purple overflow-y-auto">
      <div className="p-4 bg-white rounded shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
        <p>{anime.description}</p>
      </div>
    </div>
  );
}

export default Anime;
