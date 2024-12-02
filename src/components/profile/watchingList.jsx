import icons from "../../assets/icon";

const WatchingList = () => {
  const images = [
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 1",
      rating: 4.5,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 2",
      rating: 3.8,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 3",
      rating: 4.0,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 4",
      rating: 4.2,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 5",
      rating: 3.9,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 6",
      rating: 4.7,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 7",
      rating: 4.1,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 8",
      rating: 3.5,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 9",
      rating: 4.3,
    },
    {
      src: "https://wallpapers.com/images/hd/yuyu-hakusho-official-poster-7nwb0w13qws3tw2m.jpg",
      name: "Anime 10",
      rating: 4.6,
    },
  ];

  return (
    <div className="h-full w-full flex flex-col box-border">
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">My Watching List</h3>
        <button className="bg-gray-500 p-1 rounded-full aspect-square">
          <icons.goArrowIcon fill="white" className="m-auto" />
        </button>
      </div>

      <div className="flex-grow overflow-auto flex flex-row items-center justify-start w-full gap-4 p-4 bg-white">
        {images.map((image, index) => (
          <div key={index} className="relative w-40 h-40 aspect-square group">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-onix bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <span className="text-white text-lg font-bold capitalize line-clamp-1">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchingList;
