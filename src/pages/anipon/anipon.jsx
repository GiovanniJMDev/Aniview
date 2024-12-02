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
          <h1 className=" w-full  text-center py-6 ">Eighty Six</h1>
          <div className="w-full h-2/5 ">
            <img
              className="bg-cover bg-center object-cover h-full aspect-video rounded-lg m-auto"
              src="https://wallpaperchain.com/download/86-eighty-six/86-eighty-six-wallpaper-19.jpg"
              alt=""
            />
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
