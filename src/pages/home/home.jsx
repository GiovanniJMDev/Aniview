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
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-start items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] rounded-2xl drop-shadow-lg overflow-hidden bg-white">
        <h1 className="text-3xl font-bold w-full border  py-4 text-center bg-white z-10 shadow-md">
          My List
        </h1>{" "}
        <input
          type="text"
          name="input"
          id="home_input"
          className=" focus:outline-none text-onix placeholder:text-gray-400 rounded-xl w-4/5 px-4 py-2 my-3 border-2 border-gray-300"
          placeholder="Search for a anime"
        />
        <section className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden border border-gray-300">
            <div className=" w-full z-10 h-fit bg-white  drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">Top Anime</h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
              {/* Overflow en el contenedor interno */}{" "}
              {animes.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
              ))}
            </div>
          </div>
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden border border-gray-300">
            <div className=" w-full z-10 h-fit bg-white drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">
                Trending Anime
              </h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
              {animes.map((anime, index) => (
                <AnimeCard key={index} anime={anime} />
              ))}
            </div>
          </div>
          <div className=" bg-white rounded shadow max-h-[70vh] overflow-hidden border border-gray-300">
            <div className=" w-full z-10 h-fit bg-white drop-shadow-lg">
              <h1 className="font-bold text-center py-4 text-2xl">
                Seasonal Anime
              </h1>
            </div>

            <div className="space-y-4 p-4 overflow-auto max-h-[60vh]">
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
