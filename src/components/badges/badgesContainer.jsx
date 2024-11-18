import icons from "../../assets/icon";

const BadgesContainer = () => {
  const iconsArray = Array(16).fill(<icons.animeIcon />); // Creamos un array con 8 elementos de animeIcon

  return (
    <>
      <h3 className="text-center text-xl font-bold text-black py-2">Badges</h3>
      <div className="w-full h-fit grid grid-cols-4 grid-rows-4 place-items-center  gap-5 py-4">
        {iconsArray.map((icon, index) => (
          <div
            key={index}
            className=" aspect-square p-3 flex justify-center items-center"
          >
            {icon}
          </div> // Renderizamos cada icono con un div contenedor
        ))}
      </div>{" "}
      <button className="bg-gray-600 rounded-lg py-2 px-4 w-fit my-3 col-span-4">
        Ver más
      </button>
    </>
  );
};

export default BadgesContainer;
