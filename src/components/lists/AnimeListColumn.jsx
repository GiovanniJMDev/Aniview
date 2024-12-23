import PropTypes from "prop-types";
import AnimeListCard from "../Cards/AnimeListCard";

const AnimeListColumn = ({ count, animes, openModal }) => {
  return (
    <button
      onClick={openModal}
      className="min-w-[10rem] bg-white flex flex-col items-center gap-4 p-2 overflow-y-auto"
    >
      {animes.map((anime, index) => (
        <AnimeListCard key={index} anime={anime} />
      ))}
    </button>
  );
};

AnimeListColumn.propTypes = {
  animes: PropTypes.shape({
    map: PropTypes.func,
  }),
  count: PropTypes.any,
  openModal: PropTypes.func,
};

export default AnimeListColumn;
