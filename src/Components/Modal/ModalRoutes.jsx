import PropTypes from "prop-types";
import Modal from "./Modal";
import NavbarButton from "../Button/NavbarButton/NavbarButton";
import LogOutButton from "../Button/LogOutButton/LogOutButton";
import icons from "../../assets/icon";
import navItems from "../../Data/Routes.json"; // Updated import to use the correct path

const ModalRoutes = ({ isOpen, onClose, isExpanded }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <nav className="flex flex-col justify-evenly items-center bg-onix h-full">
        {navItems.map((item) => (
          <NavbarButton
            key={item.label}
            isExpanded={isExpanded}
            title={item.label}
            IconComponent={icons[item.icon.split(".").pop()]} // Adjusted to use the icon from the icons object
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

ModalRoutes.propTypes = {
  isExpanded: PropTypes.any,
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
};

export default ModalRoutes;
