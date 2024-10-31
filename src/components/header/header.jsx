import { useState } from "react";
import icons from "../../assets/icon";
import ModalRoutes from "../modal/modalRoutes";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full h-full bg-onix flex items-center gap-3 justify-between px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 48 48"
      >
        <defs>
          <mask id="IconifyId192e3c85a17c026d61">
            <g
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              strokeWidth="4"
            >
              <path
                fill="#555"
                d="M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z"
              />
              <path
                strokeLinecap="round"
                d="M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30"
              />
              <path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
            </g>
          </mask>
        </defs>
        <path
          fill="#000000"
          d="M0 0h48v48H0z"
          mask="url(#IconifyId192e3c85a17c026d61)"
        />
      </svg>
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
