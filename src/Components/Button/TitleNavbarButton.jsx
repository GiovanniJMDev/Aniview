import PropTypes from "prop-types";
const TitleNavbarButton = ({
  isExpanded = true,
  title,
  IconComponent,
  iconType = "fill",
  onClick, // Recibe la función como prop
}) => {
  return (
    <button
      className="hover:border-white border-4 border-transparent rounded-xl p-2 text-start w-fit transition-all duration-500 ease-in-out flex flex-nowrap items-center"
      onClick={onClick} // Ejecuta la función cuando se hace clic
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

TitleNavbarButton.propTypes = {
  IconComponent: PropTypes.elementType,
  iconType: PropTypes.string,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default TitleNavbarButton;
