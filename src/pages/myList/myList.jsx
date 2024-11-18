import React from "react";
import AnimeListCard from "../../components/cards/AnimeListCard";

const MyList = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-start flex-col">
      <h1 className="py-6">MyList</h1>
      <div className="w-4/5 h-4/5 bg-white rounded-2xl drop-shadow-lg overflow-x-auto max-w-[80vw] max-h-[80vh]">
        <div className="h-full min-w-full w-max grid grid-cols-4 content-stretch ">
          <div className="min-w-[10rem] overflow-y-auto bg-red-100 flex flex-col items-center gap-3 p-3">
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
          </div>
          <div className="min-w-[10rem] bg-red-100 flex flex-col items-center gap-4 p-2">
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
          </div>
          <div className="min-w-[10rem] bg-red-100 flex flex-col items-center gap-4 p-2">
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
          </div>
          <div className="min-w-[10rem] bg-red-100 flex flex-col items-center gap-4 p-2">
            <AnimeListCard />
            <AnimeListCard />
            <AnimeListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
