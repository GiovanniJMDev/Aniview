import React from "react"; // Import React to avoid ReferenceError
import PropTypes from "prop-types"; // Import PropTypes to avoid ReferenceError

const Badge = ({ color, completed, iconName, colorType, IconComponent }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`flex flex-col items-center aspect-square h-full p-1.5 rounded-2xl group relative" ${
        !completed ? "bg-black" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center h-full w-full">
        {IconComponent && (
          <IconComponent
            {...(colorType === "fill"
              ? { fill: completed ? color : "#e5e7eb" } // Gray-800 color for not completed
              : { stroke: completed ? color : "#e5e7eb" })} // Gray-800 color for not completed
            className="transition-opacity duration-300"
          />
        )}
      </div>

      {isHovered && (
        <div className="absolute z-10 bg-white border rounded-md p-2 translate-y-12">
          <h3 className="line-clamp-1">{iconName}</h3>
        </div>
      )}
    </div>
  );
};

Badge.propTypes = {
  iconName: PropTypes.string.isRequired, // Add prop validation
  IconComponent: PropTypes.elementType, // Add prop validation
  colorType: PropTypes.oneOf(["fill", "stroke"]).isRequired, // Add prop validation for colorType
  completed: PropTypes.bool.isRequired, // Add prop validation for completed
};

export default Badge;
