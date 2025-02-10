import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const ModalAddAnime = ({ isOpen, onClose, anime }) => {
  const [animeDetails, setAnimeDetails] = useState({
    title: anime.title,
    description: anime.description,
    imageUrl: anime.image,
    list: "", // Lista donde el anime será agregado
    rating: "", // Calificación del anime
    episode: "", // Capítulo por el que se va
  });

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar los detalles del anime en la lista
    console.log("Anime added to list:", animeDetails);
    onClose(); // Cerrar el modal después de enviar
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" p-6 rounded-lg ">
        <h2 className="text-xl font-bold mb-4">
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
              <option value="watching">Watching</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
              <option value="dropped">Dropped</option>
              <option value="plan-to-watch">Plan to Watch</option>
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
              placeholder="Episode you're currently on"
              min="1"
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
    </Modal>
  );
};

ModalAddAnime.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anime: PropTypes.object.isRequired, // Recibimos el objeto anime como prop
};

export default ModalAddAnime;
