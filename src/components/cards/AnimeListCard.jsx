const AnimeListCard = ({
  anime,
}) => {
  const { nombre, imagen, nota } = anime;

  console.log(anime);
  return (
    <div
      className="relative border border-black min-w-32 w-full max-w-64 aspect-video bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      {/* Nota en la esquina superior izquierda */}
      <span className="absolute h-8 text-center top-1 left-1 border-2 border-white bg-black bg-opacity-50 p-1 rounded aspect-square">
        {nota}
      </span>

      {/* Nombre en la parte inferior centrado */}
      <h3 className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-2 py-1 rounded">
        {nombre}
      </h3>
    </div>
  );
};

export default AnimeListCard;
