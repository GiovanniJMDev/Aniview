import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./NavbarButton.styles.css";

const NavbarButton = ({
  isExpanded = true,
  title,
  IconComponent,
  iconType = "fill",
  to = "/", // Nueva propiedad para la ruta
  onClick, // Recibe onClick como prop, para que se cierre el modal
  isActive,
}) => {
  const navigate = useNavigate(); // Hook de navegación
  const handleClick = () => {
    navigate(to); // Navega a la ruta
    if (onClick) onClick(); // Llama a onClick si está definido
  };

  return (
    <button
      onClick={handleClick} // Ejecuta la función handleClick
      className={`navbar-button ${
        isActive ? "navbar-button-active" : "navbar-button-not-active"
      }`}
    >
      {IconComponent && (
        <IconComponent
          height="2em"
          width="2em"
          data-testid="navbar-icon"
          {...(iconType === "fill"
            ? { fill: isActive ? "#32373b" : "#f3f3f3" }
            : { stroke: isActive ? "#32373b" : "#f3f3f3" })}
          className="navbar-button__icon"
        />
      )}
      <h2
        className={`navbar-button__text ${
          isExpanded
            ? "navbar-button__text-expanded"
            : "navbar-button__text-not-expanded"
        } ${isActive ? "navbar-button__text-active" : ""}`}
      >
        {title}
      </h2>
    </button>
  );
};

NavbarButton.propTypes = {
  IconComponent: PropTypes.elementType,
  iconType: PropTypes.string,
  isActive: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default NavbarButton;
