// src/Home.js
import AnimeCard from "../../components/cards/AnimeCard";
import animes from "../../data/AnimeList.json";
function Home() {
  const cards = [
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    // Agrega más cartas según sea necesario
  ];

  return (
    <div className="flex justify-center items-start h-full w-full bg-light-purple overflow-y-auto overflow-x-hidden">
      <div className="w-5/6 flex flex-col items-center justify-center ">
        <header className="text-center w-full p-4 rounded mb-4">
          <h1 className="pb-3">Aniview</h1>
          <input
            type="text"
            name="input"
            id="home_input"
            className=" focus:outline-none text-onix placeholder:text-gray-400 rounded-xl w-4/5 px-4 py-2"
          />
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden ">
            <div className=" w-full z-10 h-fit bg-white drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">Top Anime</h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
              {/* Overflow en el contenedor interno */}{" "}
              {animes.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
              ))}
            </div>
          </div>
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden ">
            <div className=" w-full z-10 h-fit bg-white drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">
                Trending Anime
              </h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
              {/* Overflow en el contenedor interno */}{" "}
              {animes.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
              ))}
            </div>
          </div>{" "}
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden ">
            <div className=" w-full z-10 h-fit bg-white drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">
                Seasonal Anime
              </h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
              {/* Overflow en el contenedor interno */}{" "}
              {animes.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
