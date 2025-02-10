import icons from "../../assets/icon";

const Loading = () => {
  return (
    <div className="flex animate-pulse justify-center items-center h-screen bg-light-purple flex-col">
      <div className="flex  items-center justify-center gap-6">
        <div className="animate-bounce flex items-end justify-center w-fit h-fit gap-4">
          <icons.animeIcon fill="white" height="10rem" width="10rem" />
        </div>
      </div>
      <h1 className="text-white text-[10rem] font-extrabold">Aniview</h1>
    </div>
  );
};

export default Loading;
