import AddAniponButton from "../../components/button/addAniponButton";
import RemoveAniponButton from "../../components/button/removeAniponButton";
const Anipon = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-white rounded-2xl drop-shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          Anipon{" "}
        </h1>
        <div className="flex-grow overflow-auto flex flex-col  items-center w-full">
          <h3 className=" w-full font-bold text-xl text-center py-4 ">Eighty Six</h3>
          <div className="flex flex-col md:flex-row items-start w-full px-4 gap-4">
            {/* Anime Image */}
            <img
              src="https://wallpaperchain.com/download/86-eighty-six/86-eighty-six-wallpaper-19.jpg"
              alt="Eighty Six"
              className="rounded-lg aspect-video h-full md:w-1/3 object-cover bg-center shadow-md"
            />
            {/* Anime Information */}
            <div className="p-4 h-full bg-gray-50 border w-full md:w-2/3 border-gray-300 rounded-lg shadow-md flex-grow">
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
                <strong>Synopsis:</strong> In a world where war is fought between humans and machines, a group of young pilots fights for their freedom and the truth behind their existence.
              </p>
            </div>
          </div>
          <button className="m-auto my-3 bg-onix py-2 px-6 text-white rounded-lg">
            Search
          </button>
          <div
            className="flex-grow w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 row-span-3  justify-items-center"
            style={{ gridAutoRows: "min-content" }}
          >
            <RemoveAniponButton title={"Shonen"} />
            <RemoveAniponButton title={"Seinen"} />
            <RemoveAniponButton title={"Spokon"} />{" "}
            <RemoveAniponButton title={"Spokon"} />
            <AddAniponButton />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Anipon;
