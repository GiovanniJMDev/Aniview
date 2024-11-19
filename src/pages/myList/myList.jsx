import React from "react";
import AnimeListCard from "../../components/cards/AnimeListCard";

const MyList = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-start items-center flex-col w-5/6 md:w-4/5 h-full max-h-[90dvh] bg-white rounded-2xl drop-shadow-lg overflow-hidden ">
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          My List
        </h1>
        <div className="w-full flex-grow flex flex-col overflow-auto">
          <div className="min-w-full w-max grid grid-cols-4 content-stretch h-full ">
            <div className="min-w-[10rem] bg-white flex flex-col items-center gap-3 p-3 overflow-y-auto">
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
            </div>
            <div className="min-w-[10rem] bg-white flex flex-col items-center gap-4 p-2 overflow-y-auto">
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
            </div>
            <div className="min-w-[10rem] bg-white flex flex-col items-center gap-4 p-2 overflow-y-auto">
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
            </div>
            <div className="min-w-[10rem] bg-white flex flex-col items-center gap-4 p-2 overflow-y-auto">
              <AnimeListCard />
              <AnimeListCard />
              <AnimeListCard />
            </div>
          </div>
          {/* <div>AAAAAAAAAAAAAAAAAAAAA</div> */}
        </div>
      </div>
    </div>
  );
};

export default MyList;
