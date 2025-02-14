import PropTypes from "prop-types";
const AnimeListCard = ({
  anime,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQtkoWwwOljsEsVFxILtdXFW2qk4iZq2oNA&s",
}) => {
  console.log(anime);
  return (
    <div
      className="relative border border-black min-w-32 w-full max-w-64 aspect-video bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${
          anime.animeImageUrl ? anime.animeImageUrl : image
        })`,
      }}
    >
      {/* <span className="absolute h-8 text-center top-1 left-1 border-2 border-white bg-black/50 p-1 rounded-sm aspect-square">
        {anime.rating}
      </span> */}

      {/* Name at the bottom center */}
      <h3 className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 bg-black/50 px-2 py-1">
        {anime.animeTitle}
      </h3>
    </div>
  );
};

AnimeListCard.propTypes = {
  anime: PropTypes.shape({
    animeImageUrl: PropTypes.string,
    animeTitle: PropTypes.string,
    rating: PropTypes.number,
  }),
  image: PropTypes.string,
};

export default AnimeListCard;
