import icons from "../../assets/icon";
const Badge = () => {
  return (
    <div className="flex flex-row bg-gray-400 w-fit p-2 gap-1 rounded-2xl border-2 hover:bg-gray-700 border-black transition-all cursor-pointer duration-300 ease-in-out select-none">
      <icons.animeIcon /> <h3>Anime</h3>
    </div>
  );
};

export default Badge;
