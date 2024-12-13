import RowAnimeListCard from "../../components/Lists/RowAnimeListCard";

const Listas = ({ lists, selectedList, setSelectedList }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-start px-4 items-center sticky top-0 z-10 border-b h-fit bg-white border-gray-300 py-2">
        <select
          value={selectedList.id_list}
          onChange={(e) => {
            const selected = lists.find(
              (list) => list.id_list === parseInt(e.target.value)
            );
            setSelectedList(selected);
          }}
          className="border border-gray-300 rounded-lg p-2 outline-none"
        >
          <option value="" disabled>
            Select a list
          </option>
          {lists.map((list) => (
            <option key={list.id_list} value={list.id_list}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 h-max px-4 py-2">
        {selectedList.animes.map((anime, index) => (
          <RowAnimeListCard key={index} anime={anime} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Listas;
