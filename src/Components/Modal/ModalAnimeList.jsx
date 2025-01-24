
import PropTypes from "prop-types"
import Modal from "./Modal";

const ModalAnimeList = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full flex flex-col items-center justify-start px-4 overflow-y-auto gap-4">
        <div className=" w-full h-fit">
          <h3 className="text-black text-3xl font-bold p-4 text-center truncate whitespace-nowrap overflow-hidden text-ellipsis">
            Dandadan
          </h3>
        </div>
        <div className="flex justify-center items-center gap-4 w-full flex-col md:flex-row">
          <div
            style={{
              backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/dandadan-character-3840x2160-19434.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full aspect-video rounded-lg md:w-1/2 flex justify-center items-end"
          ></div>

          <div className="w-full h-auto aspect-video rounded-lg bg-center object-cover md:w-1/2 p-4 bg-gray-100 shadow-lg md:overflow-auto">
            {/* Título */}
            <span className="text-xl font-semibold text-gray-700 mb-2 block">
              Cambiar de lista
            </span>

            {/* Botón y Select para lista */}
            <div className="mb-4">
              <select
                name="list"
                id="list"
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">Lista 1</option>
                <option value="2">Lista 2</option>
                <option value="3">Lista 3</option>
              </select>
            </div>

            {/* Sección de actualización de información */}
            <span className="text-xl font-semibold text-gray-700 mb-2 block">
              Actualizar información
            </span>

            <div className="space-y-4">
              {/* Select de capítulo */}
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Capítulo
                </span>
                <select
                  name="chapter"
                  id="chapter"
                  className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">Cap 1</option>
                  <option value="2">Cap 2</option>
                  <option value="3">Cap 3</option>
                  <option value="4">Cap 4</option>
                  <option value="5">Cap 5</option>
                  <option value="6">Cap 6</option>
                  <option value="7">Cap 7</option>
                  <option value="8">Cap 8</option>
                  <option value="9">Cap 9</option>
                  <option value="10">Cap 10</option>
                </select>
              </div>

              {/* Input de rating */}
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Rating
                </span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  defaultValue={5}
                  className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Botón de actualización */}
            <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all">
              Actualizar información
            </button>
          </div>
        </div>
        <button className="bg-medium-purple text-white px-4 py-2 rounded-lg text-center">
          Ir a ver el anime
        </button>
        <div></div>
      </div>
    </Modal>
  );
};

ModalAnimeList.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalAnimeList;
