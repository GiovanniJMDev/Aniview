import AnimeListColumn from "../../components/lists/AnimeListColumn";
import MyListData from "../../data/MyList.json";

const MyList = () => {
  const { listas } = MyListData;

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-transparent rounded-2xl drop-shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold w-full py-4 text-center bg-white z-10 shadow-md">
          My List
        </h1>
        <div className="w-full flex-grow flex flex-col overflow-auto">
          <div className="min-w-full w-max grid grid-cols-4 content-stretch h-full">
            {listas.map((lista) => (
              <AnimeListColumn key={lista.id_lista} count={lista.animes.length} animes={lista.animes}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
