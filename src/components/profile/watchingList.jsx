import { useState, useEffect } from "react";
import MyList from "../../data/MyList.json"; // Import the JSON data

const WatchingList = () => {
  const [selectedList, setSelectedList] = useState(1); // Default to the first list
  const [images, setImages] = useState([]);

  // Function to handle list selection
  const handleListChange = (event) => {
    setSelectedList(Number(event.target.value));
  };

  // Effect to update images based on selected list
  useEffect(() => {
    const selectedAnimes =
      MyList.lists.find((list) => list.id_list === selectedList)?.animes || [];
    setImages(selectedAnimes);
  }, [selectedList]);

  return (
    <div className="h-full w-full flex flex-col box-border">
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">My Watching List</h3>
        <select
          value={selectedList}
          onChange={handleListChange}
          className="border border-gray-300 rounded-lg px-2 outline-gray-800"
        >
          {MyList.lists.map((list) => (
            <option key={list.id_list} value={list.id_list}>
              {list.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-grow overflow-auto flex flex-row items-center justify-start w-full gap-4 p-4 px-3 bg-white">
        {images.map((image, index) => (
          <div key={index} className="relative h-full aspect-square group">
            <img
              src={image.image}
              alt={image.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-onix bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <span className="text-white text-2xl py-2 font-bold capitalize line-clamp-1">
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
