import { useState } from "react";
import icons from "../../assets/icon";
import ModalRoutes from "../Modal/ModalRoutes";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full h-full bg-onix flex items-center gap-3 justify-between px-6">
        <icons.animeIcon fill="white" />

      <h1 className="text-white">AniView</h1>

      {/* Botón que abre/cierra el modal */}
      <button
        onClick={toggleModal}
        className="border-2 aspect-square border-transparent rounded-lg hover:border-white transition-all ease-in-out duration-300"
      >
        <icons.menuIcon fill="white" />
      </button>

      {/* ModalRoutes controlado por el estado isModalOpen */}
      <ModalRoutes isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Header;
