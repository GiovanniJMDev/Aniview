// PrivateLayout.js
import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { UserProvider } from "../../Context/UserContext";
const PrivateLayout = () => {
  return (
    <>
      <UserProvider>
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
          <main className="grow overflow-hidden max-h-dvh">
            <Outlet />
          </main>
        </div>
      </UserProvider>
    </>
  );
};

export default PrivateLayout;
