import { useNavigate } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/anime/${anime.id}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex w-full shadow-lg border border-gray-500 h-fit flex-row flex-start rounded-xl p-4 overflow-hidden"
    >
      <img
        src={anime.image}
        alt={anime.title}
        className="w-3/6 rounded-l-lg min-w-16  max-w-28  aspect-square bg-cover bg-center object-cover"
      />
      <div className="px-4 rounded-r-lg overflow-hidden w-full flex-grow break-all box-border">
        <h1 className="text-xl font-bold line-clamp-1">{anime.title}</h1>
        <p className="text-gray-600 line-clamp-3 h-fit">{anime.description}</p>
      </div>
    </div>
  );
};

export default AnimeCard;