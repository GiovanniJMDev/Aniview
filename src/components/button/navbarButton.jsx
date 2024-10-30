import { useNavigate } from "react-router-dom";

const NavbarButton = ({
  isExpanded,
  title,
  IconComponent,
  iconType = "fill",
  to = "/", // Nueva propiedad para la ruta
}) => {
  const navigate = useNavigate(); // Hook de navegación

  return (
    <button
      onClick={() => navigate(to)} // Redirige a la ruta especificada
      className="bg-medium-purple hover:bg-dark-purple hover:border-white border-4 border-transparent rounded-xl p-2 text-start w-fit transition-all duration-500 ease-in-out"
    >
      {IconComponent && (
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

export default NavbarButton;
