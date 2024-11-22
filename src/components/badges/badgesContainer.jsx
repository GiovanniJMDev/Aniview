import icons from "../../assets/icon";

const BadgesContainer = () => {
  const iconsArray = Array(16).fill(<icons.animeIcon />); // Creamos un array con 16 elementos de animeIcon

  return (
    <div className="h-full w-full flex flex-col">
      {/* Encabezado fijo */}
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">Badges</h3>
        <button className="bg-gray-500 p-1 rounded-full aspect-square">
          <icons.goArrowIcon fill="white" className="m-auto" />
        </button>
      </div>

      {/* Contenedor de medallas con overflow */}
      <div className="flex-1 overflow-auto grid grid-cols-4 grid-rows-auto place-items-center gap-5 py-4 px-2">
        {iconsArray.map((icon, index) => (
          <div
            key={index}
            className="aspect-square p-3 flex justify-center items-center bg-gray-200 hover:bg-gray-400 transition-all duration-300 rounded-lg shadow-lg"
          >
            {icon}
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
