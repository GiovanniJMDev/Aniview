import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { useUser } from "../../Context/UserContext"; // Importar el hook useUser
import ToastedNotification from "../Notification/ToastedNotification"; // Importar el componente de notificación

const ModalAddAnime = ({ isOpen, onClose, anime }) => {
  const { animeLists } = useUser(); // Obtener las listas del usuario desde el contexto

  console.log("Anime Lists:", animeLists); // Verificar qué listas están disponibles

  // Calcular el total de episodios sumando los episodios por temporada
  const totalEpisodes = anime.episodesPerSeason.reduce(
    (total, seasonEpisodes) => total + seasonEpisodes,
    0
  );

  const [animeDetails, setAnimeDetails] = useState({
    title: anime.title,
    description: anime.description,
    imageUrl: anime.image,
    list: "", // Lista donde el anime será agregado
    rating: 5, // Calificación predeterminada (5)
    episode: 1, // Capítulo predeterminado (1)
  });

  const [notification, setNotification] = useState(null); // Para manejar la notificación

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to`, value);
    setAnimeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected list type:", animeDetails.list);

    if (!animeLists || animeLists.length === 0) {
      console.error("animeLists is empty or undefined!");
      setNotification({
        type: "error",
        message: "No lists available to add the anime.",
        statusCode: 500,
      });
      return;
    }

    const selectedList = animeLists.find(
      (list) => list.listType.toUpperCase() === animeDetails.list.toUpperCase()
    );

    console.log("Selected list:", selectedList);

    if (!selectedList) {
      console.error("List not found!");
      setNotification({
        type: "error",
        message: "List not found!",
        statusCode: 500,
      });
      return;
    }

    const animeListId = selectedList.id;
    const data = {
      animeListId,
      animeId: anime.id,
    };

    // Hacer la solicitud HTTP a la API para agregar el anime a la lista
    try {
      const response = await fetch(
        "http://localhost:8080/api/anime-list-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            mode: "same-origin",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add anime to list");
      }

      // Si la solicitud fue exitosa, muestra el resultado o cierra el modal
      console.log("Anime successfully added to list!");
      setNotification({
        type: "success",
        message: "Anime successfully added to your list!",
        statusCode: 200,
      });
      onClose(); // Cerrar el modal después de enviar
    } catch (error) {
      console.error("Error adding anime to list:", error.message);
      setNotification({
        type: "error",
        message: error.message,
        statusCode: 500,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 !text-gray-900">
          Add {anime.title} to Your List
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Anime Title
            </label>
            <input
              type="text"
              name="title"
              value={animeDetails.title}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              List
            </label>
            <select
              name="list"
              value={animeDetails.list}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a list</option>
              <option value="WATCHING">Watching</option>
              <option value="COMPLETED">Completed</option>
              <option value="DROPPED">Dropped</option>
              <option value="PLAN_TO_WATCH">Plan to Watch</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={animeDetails.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Rate the anime (1-10)"
              min="1"
              max="10"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Episode
            </label>
            <input
              type="number"
              name="episode"
              value={animeDetails.episode}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder={`Episode you're currently on (1 - ${totalEpisodes})`}
              min="1"
              max={totalEpisodes}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add to List
            </button>
          </div>
        </form>
      </div>

      {/* Mostrar la notificación si hay alguna */}
      {notification && (
        <ToastedNotification
          type={notification.type}
          message={notification.message}
          statusCode={notification.statusCode}
        />
      )}
    </Modal>
  );
};

ModalAddAnime.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anime: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episodesPerSeason: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default ModalAddAnime;
