import PropTypes from "prop-types";
const RowAnimeListCard = ({ anime, index, openModal }) => {
  return (
    <button
      key={index}
      onClick={openModal}
      className="flex flex-col sm:flex-row items-center drop-shadow-lg border border-gray-300 rounded-lg p-4 bg-white"
    >
      <div className="h-fit">
        <img
          src={anime.animeImageUrl}
          alt={anime.animeTitle}
          className="w-full sm:w-auto sm:h-4/6 max-h-32 aspect-video rounded-lg bg-center object-cover"
        />
      </div>
      <h3 className="flex px-4 flex-1 text-gray-800 text-3xl text-center font-semibold">
        {anime.animeTitle}
      </h3>
      <div className="text-gray-800 text-right text-3xl">{anime.rating}</div>
    </button>
  );
};

RowAnimeListCard.propTypes = {
  anime: PropTypes.shape({
    animeImageUrl: PropTypes.any,
    animeTitle: PropTypes.any,
    rating: PropTypes.any,
  }),
  index: PropTypes.any,
  openModal: PropTypes.func,
};

export default RowAnimeListCard;
