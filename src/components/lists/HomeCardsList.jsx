import AnimeCard from "../Cards/AnimeCard";
function HomeCardsList({ title, items = [] }) {
  return (
    <div className="bg-white rounded shadow h-full min-h-[50vh] overflow-hidden border border-gray-300">
      <div className="w-full z-10 h-fit bg-white">
        <h1 className="font-bold text-center py-4 text-2xl">{title}</h1>
      </div>

      <div className="space-y-4 p-4 overflow-auto h-[calc(100%-4rem)]">
        {items && items.length > 0 ? (
          items.map((anime, index) => <AnimeCard key={index} anime={anime} />)
        ) : (
          <p className="text-center text-gray-500">No hay animes disponibles</p>
        )}
      </div>
    </div>
  );
}

export default HomeCardsList;
