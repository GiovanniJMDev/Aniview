import AnimeListCard from "../Cards/AnimeListCard";

const AnimeListColumn = ({ count, animes }) => {
  console.log(animes);
  return (
    <div className="min-w-[10rem] bg-white flex flex-col items-center gap-4 p-2 overflow-y-auto">
      {animes.map((anime, index) => (
        <AnimeListCard key={index} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeListColumn;
