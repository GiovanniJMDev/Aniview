import Modal from "./modal";
import NavbarButton from "../button/navbarButton";
import LogOutButton from "../button/logOutButton";
import icons from "../../assets/icon";
import navItems from "../../data/Routes.json"; // Updated import to use the correct path

const ModalRoutes = ({ isOpen, onClose, isExpanded }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <nav className="flex flex-col space-y-4 h-5/6 items-center">
        {navItems.map((item) => (
          <NavbarButton
            key={item.label}
            isExpanded={isExpanded}
            title={item.label}
            IconComponent={icons[item.icon.split('.').pop()]} // Adjusted to use the icon from the icons object
            iconType={item.iconType}
            to={item.link}
            onClick={onClose} // Cierra el modal al hacer clic en cada botón de navegación
          />
        ))}
        <LogOutButton
          isExpanded={isExpanded}
          title={"LogOut"}
          IconComponent={icons.logOutIcon}
          iconType={"fill"}
          to="/login"
          onClick={onClose} // Cierra el modal al hacer clic en el botón de cierre de sesión
        />
      </nav>
    </Modal>
  );
};

export default ModalRoutes;
