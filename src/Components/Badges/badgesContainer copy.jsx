import badgeData from "../../data/badgeData.json";
import icons from "../../assets/icon";
import Badge from "./Badge";
import badgeIcons from "../../assets/badgeIcons";

const BadgesContainer = () => {
  console.log(badgeData);
  return (
    <div className="h-full w-full flex flex-col">
      {/* Encabezado fijo */}
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">Badges</h3>
        <button className="bg-gray-500 p-0.5 rounded-full aspect-square">
          <icons.goArrowIcon fill="white" className="m-auto" />
        </button>
      </div>

      {/* Contenedor de medallas con overflow */}
      <div className="flex-1 overflow-auto grid grid-cols-4 grid-rows-auto place-items-center gap-5 py-4 px-2">
        {badgeData.map((badge, index) => (
          <div
            key={index}
            className="aspect-square p-1.5 flex justify-center items-center bg-gray-200 hover:bg-gray-400 transition-all duration-300 rounded-lg shadow-lg"
          >
            <Badge
              color={badge.color}
              completed={badge.completed}
              iconName={badge.name}
              colorType={badge.colorType}
              IconComponent={badgeIcons[badge.icon.split(".").pop()]} // Adjusted to use the icon from the icons object
            />
          </div>
        ))}
      </div>

      {/* Botón fijo */}
      <button className="bg-gray-600 rounded-lg py-2 px-4 w-fit mx-auto my-3">
        Ver más
      </button>
    </div>
  );
};

export default BadgesContainer;
