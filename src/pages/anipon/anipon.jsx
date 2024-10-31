
import AddAniponButton from "../../components/button/addAniponButton";
import RemoveAniponButton from "../../components/button/removeAniponButton";
const Anipon = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-start flex-col">
      <h1 className="py-6">Anipon</h1>
      <div className=" flex justify-center items-start flex-col w-4/5 h-5/6 bg-white rounded-2xl drop-shadow-lg">
        <h1 className=" w-full  text-center py-6 ">Eighty Six</h1>
        <div className="w-full h-2/5 ">
          <img
            className="bg-cover h-full aspect-video rounded-lg m-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4faOK6TmSk_N9ZEs9uxwhIrNPKnDOijAT7A&s"
            alt=""
          />
        </div>
        <button className="m-auto my-3 bg-onix py-2 px-6 text-white rounded-lg">
          Search
        </button>
        <div
          className="flex-grow w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 row-span- gap-0 items-start justify-items-center"
          style={{ gridAutoRows: "min-content" }}
        >
          <RemoveAniponButton title={"Shonen"} />
          <RemoveAniponButton title={"Seinen"} />
          <RemoveAniponButton title={"Spokon"} />{" "}
          <RemoveAniponButton title={"Spokon"} />
          <AddAniponButton />
        </div>
      </div>
    </div>
  );
};

export default Anipon;
