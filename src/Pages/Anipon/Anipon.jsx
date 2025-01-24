import { useState } from "react";
import AddAniponButton from "../../Components/Button/AddAniponButton";
import RemoveAniponButton from "../../Components/Button/RemoveAniponButton";
const Anipon = () => {
  const [animeData, setAnimeData] = useState("");
  const animeGenres = [
    "Action",
    "Drama",
    "Mystery",
    "Fantasy",
    "Adventure",
    "Shounen",
    "Thriller",
    "Supernatural",
    "Psychological",
    "Mystery",
    "Superhero",
    "Isekai",
    "Horror",
    "Sci-Fi",
    "Mecha",
    "Historical",
    "Comedy",
  ];

  const GetAnimeRandom = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const genresQuery = selectedGenres.join(",");

    fetch(`${API_BASE_URL}/api/anime/random?genres=${genresQuery}`)
      .then((response) => response.json())
      .then((Data) => {
        setAnimeData(Data);
        console.log(Data);
      });
  };
  // Estado para los géneros seleccionados
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Función para agregar un anime al array de animes seleccionados
  const handleAddAnime = (genre) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Función para eliminar un anime del array de animes seleccionados
  const handleRemoveAnime = (genre) => {
    setSelectedGenres(selectedGenres.filter((anime) => anime !== genre));
  };

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-white rounded-2xl drop-shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          Anipon{" "}
        </h1>
        <div className="grow overflow-auto flex flex-col  items-center w-full">
          <h3 className=" w-full font-bold text-xl text-center py-4 ">
            {/* Eighty Six */}
            {animeData.title || "Eighty Six"}
          </h3>
          <div className="flex flex-col md:flex-row items-start w-full px-4 gap-4">
            {/* Anime Image */}
            <img
              src={
                animeData.image ??
                "https://www.tokyoweekender.com/wp-content/uploads/2023/05/Things-you-didnt-know-about-Japans-gacha-750x502.jpg.webp"
              }
              alt="Eighty Six"
              className="rounded-lg aspect-video h-full md:w-1/3 object-cover bg-center shadow-md"
            />
            {/* Anime Information */}
            <div className="p-4 h-full bg-gray-50 border w-full md:w-2/3 border-gray-300 rounded-lg shadow-md grow">
              {(animeData && (
                <>
                  <p className="text-lg">
                    <strong>Platforms:</strong> Crunchyroll, Funimation
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Years:</strong> 2021 - Ongoing
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Seasons:</strong> 2
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Episodes per season:</strong> 12, 12
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Total number of episodes:</strong> 24
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Rating:</strong> 8.5/10
                  </p>
                  <p className="text-lg mt-2">
                    <strong>Synopsis:</strong> In a world where war is fought
                    between humans and machines, a group of young pilots fights
                    for their freedom and the truth behind their existence.
                  </p>
                </>
              )) || (
                <p>
                  Anipon es un divertido gachapón (máquina de cápsulas) digital,
                  pero en lugar de recibir juguetes o sorpresas físicas,
                  ¡obtienes recomendaciones de animes! Al igual que en un
                  gachapón tradicional, donde no sabes qué recibirás, Anipon te
                  ofrece la emoción de descubrir nuevos géneros, títulos y
                  series de anime que podrían sorprenderte. Solo tienes que
                  seleccionar tus géneros preferidos y, al girar la rueda del
                  gachapón, recibirás recomendaciones aleatorias basadas en tus
                  gustos.
                </p>
              )}
            </div>
          </div>
          <button
            onClick={() => GetAnimeRandom()}
            className="m-auto my-3 bg-onix py-2 px-6 text-white rounded-lg"
          >
            Search
          </button>
          <div
            className="grow w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 row-span-3  justify-items-center"
            style={{ gridAutoRows: "min-content" }}
          >
            {selectedGenres.map((genre, index) => (
              <RemoveAniponButton
                key={index}
                title={genre}
                handleRemoveAnime={handleRemoveAnime}
              />
            ))}
            <AddAniponButton
              suggestions={animeGenres}
              handleAddAnime={handleAddAnime}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Anipon;
