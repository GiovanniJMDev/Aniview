// src/Anime.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ModalAddAnimeToList from "../../Components/Modal/ModalAddAnimeToList";

function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API_BASE_URL}/api/anime/${id}`, {
          method: "GET",
          credentials: "include",
        });

        const Data = await response.json();
        setAnime(Data);
        console.log(Data);
      } catch (error) {
        console.error("Error al obtener el anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) {
    // Mostrar mientras se está cargando
    return <Loading />;
  }

  if (!anime) {
    // Mensaje si no se encuentra el anime
    return (
      <div className="flex justify-center items-center h-screen w-full bg-light-purple">
        Cargando anime...
      </div>
    );
  }

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-white rounded-2xl drop-shadow-lg overflow-hidden">
        <div className="w-full py-4 bg-white z-20 shadow-md flex flex-row justify-between items-center gap-4 px-8">
          <div className="col-span-1" />
          <h1 className="col-span-8 text-3xl font-bold text-center">
            {anime.title}
          </h1>
          <button
            onClick={openModal} // Llamamos a la función openModal al hacer clic
            className="col-span-1 px-4 py-1.5 text-white bg-gray-500 w-fit rounded-sm flex items-center justify-center transition-transform duration-300 ease-in-out"
          >
            Add to list
          </button>
        </div>

        <div className="grow overflow-auto flex flex-col py-4 items-center w-full">
          <div className="flex flex-col md:flex-row items-start w-full px-4 gap-4">
            {/* Imagen del anime */}
            <img
              src={anime.image}
              alt={anime.title}
              className=" rounded-lg aspect-video h-full md:w-1/3 object-cover bg-center shadow-md"
            />
            {/* Información del anime */}
            <div className="p-4 h-full bg-gray-50 border w-full md:w-2/3 border-gray-300 rounded-lg shadow-md grow">
              <p className="text-lg">
                <strong>Platforms:</strong> {anime.platforms?.join(", ")}
              </p>
              <p className="text-lg mt-2">
                <strong>Years:</strong> {anime.yearStarted} -{" "}
                {anime.yearEnded || "En emisión"}
              </p>
              <p className="text-lg mt-2">
                <strong>Seasons:</strong> {anime.seasons}
              </p>
              <p className="text-lg mt-2">
                <strong>Episodes per season:</strong>{" "}
                {anime.episodes_per_season?.join(", ")}
              </p>
              <p className="text-lg mt-2">
                <strong>Total number of episodes:</strong>{" "}
                {anime.episodes_per_season?.join(", ")}
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
              {anime.genres?.map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          {/* Descripción */}
          <div className="w-full h-full px-4">
            <div className="p-4 h-full bg-gray-50 border border-gray-300 rounded-lg shadow-md w-full">
              <p className=" text-md md:text-lg">
                <strong>Description:</strong> {anime.description}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Modal para añadir anime */}
      <ModalAddAnimeToList
        isOpen={isModalOpen}
        onClose={closeModal}
        anime={anime}
      />
    </div>
  );
}

export default Anime;
