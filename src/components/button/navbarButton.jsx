import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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
      className={`${
        isActive
          ? "bg-white border-white text-onix"
          : "bg-transparent text-white border-transparent hover:border-white"
      } border-4 outline-white rounded-xl p-2 text-start w-fit transition-all duration-500 ease-in-out flex flex-nowrap items-center`}
    >
      {IconComponent && (
        <IconComponent
          height="2em"
          width="2em"
          {...(iconType === "fill"
            ? { fill: isActive ? "#32373b" : "#f3f3f3" }
            : { stroke: isActive ? "#32373b" : "#f3f3f3" })}
          className="inline-block align-middle transition-transform duration-500"
        />
      )}
      <h2
        className={`inline-block align-middle transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "w-32 ml-2" : "w-0"
        } ${isActive ? "text-dark-purple" : ""}`}
      >
        {title}
      </h2>
    </button>
  );
};

NavbarButton.propTypes = {
  IconComponent: PropTypes.IconComponent,
  iconType: PropTypes.string,
  isActive: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.any,
  to: PropTypes.string,
};

export default NavbarButton;
