// PrivateLayout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
const PrivateLayout = () => {
  return (
    <>
      {/* Header visible solo en dispositivos móviles */}
      <div className="block h-14 sm:hidden">
        <Header />
      </div>

      <div
        className="flex  bg-gray-100"
        style={{ minHeight: "calc(100dvh - 3.5rem)" }}
      >
        {/* Navbar oculto en móviles y visible en tabletas y pantallas grandes */}
        <div className="hidden sm:block">
          <Navbar />
        </div>

        {/* Contenido principal visible en todos los tamaños */}
        <div className="flex-grow overflow-hidden max-h-dvh">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
