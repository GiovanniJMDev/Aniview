import icons from "../../assets/icon";

const WatchingList = () => {
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="h-fit px-4 py-2 flex justify-between border-b-2 border-black">
        <h3 className="text-xl font-bold text-black sticky top-0 bg-white border-black z-10">
          Badges
        </h3>
        <button className="bg-gray-500 p-1 rounded-full aspect-square">
          <icons.goArrowIcon fill="white" className="m-auto" />
        </button>
      </div>
      <div className="flex-grow overflow-auto flex flex-col w-full gap-4 p-4 bg-red-500"></div>
    </div>
  );
};

export default WatchingList;
