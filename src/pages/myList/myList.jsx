import MyListData from "../../data/MyList.json";
import { useState, useEffect } from "react";
import ColumnList from "./ColumnList";
import RowList from "./RowList";
import icons from "../../assets/icon/index";

const MyList = () => {
  const { lists } = MyListData;
  const [isGridView, setIsGridView] = useState(() => {
    // Retrieve the view type from localStorage
    const savedView = localStorage.getItem("viewType");
    return savedView ? JSON.parse(savedView) : true; // Default to grid view if not found
  });
  const [selectedList, setSelectedList] = useState(
    lists.length > 0 ? lists[0] : null
  );

  useEffect(() => {
    // Save the view type to localStorage whenever it changes
    localStorage.setItem("viewType", JSON.stringify(isGridView));
  }, [isGridView]);

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-transparent rounded-2xl drop-shadow-lg overflow-hidden">
        <div className="w-full py-4 bg-white z-20 shadow-md flex flex-row justify-between items-center gap-4 px-8">
          <div className="col-span-1"></div>
          <h1 className="col-span-8 text-3xl font-bold text-center">
            My Lists
          </h1>
          <button
            onClick={() => setIsGridView(!isGridView)}
            className="col-span-1 px-4 py-2 bg-gray-500 w-fit rounded flex items-center justify-center transition-transform duration-300 ease-in-out"
          >
            {isGridView ? (
              <icons.myListIcon
                width="1.5em"
                height="1.5em"
                stroke="white"
                className="transform transition-transform duration-500 ease-in-out"
              />
            ) : (
              <icons.myListIcon
                width="1.5em"
                height="1.5em"
                stroke="white"
                className="transform transition-transform duration-500 ease-in-out"
                style={{ transform: "rotate(90deg)" }}
              />
            )}
          </button>
        </div>

        <div className="w-full flex-grow flex flex-col overflow-auto bg-white">
          {isGridView ? (
            <ColumnList lists={lists} />
          ) : (
            <RowList
              lists={lists}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyList;
