import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const LogOutButton = ({
  isExpanded = true,
  title,
  IconComponent,
  iconType = "fill",
  to = "/", // Nueva propiedad para la ruta
  onClick, // Recibe onClick como prop, para que se cierre el modal
}) => {
  const navigate = useNavigate(); // Hook de navegación
  const handleClick = () => {
    navigate(to); // Navega a la ruta
    if (onClick) onClick(); // Llama a onClick si está definido
  };
  return (
    <button
      onClick={handleClick} // Ejecuta la función handleClick
      className="bg-raspberry-red outline-white hover:bg-dark-raspberry-red hover:border-white border-4 border-transparent rounded-xl p-2 text-start w-fit transition-all duration-500 ease-in-out flex flex-nowrap"
    >
      {IconComponent && ( // Verifica que IconComponent no sea undefined
        <IconComponent
          height="2em"
          width="2em"
          {...(iconType === "fill"
            ? { fill: "#f3f3f3" }
            : { stroke: "#f3f3f3" })}
          className="inline-block align-middle transition-transform duration-500"
        />
      )}
      <h2
        className={`inline-block align-middle transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "w-32 ml-2" : "w-0"
        }`}
      >
        {title}
      </h2>
    </button>
  );
};

LogOutButton.propTypes = {
  IconComponent: PropTypes.elementType,
  iconType: PropTypes.string,
  isActive: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default LogOutButton;
