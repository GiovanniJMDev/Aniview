import icons from "../../assets/icon";

const WatchingList = () => {
  return (
    <div className="h-full w-full">
      <div className="h-fit p-2 flex justify-between border-b border-black">
        <h1 className="w-fit">Completed List</h1>
        <button className="bg-gray-500 p-2 rounded-full ">
          <icons.goArrowIcon fill="white" className="m-auto" />
        </button>
      </div>
      <div className=" h-4/6  flex flex-row justify-start items-center gap-4 px-4">
        <img
          src="https://shop.selecta-vision.com/12221-large_default/yuyu-hakusho-monster-box-2023.jpg"
          alt=""
          className=" aspect-square w-1/5 max-w-28 cursor-pointer"
        />{" "}
      </div>
    </div>
  );
};

export default WatchingList;
