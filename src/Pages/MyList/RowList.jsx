import PropTypes from "prop-types";
import RowAnimeListCard from "../../Components/Lists/RowAnimeListCard";

const Listas = ({ lists, selectedList, setSelectedList, openModal }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-start px-4 items-center sticky top-0 z-10 border-b h-fit bg-white border-gray-300 py-2">
        <select
          value={selectedList ? selectedList.id : ""}
          onChange={(e) => {
            const selected = lists.find((list) => list.id === e.target.value);
            setSelectedList(selected);
          }}
          className="border border-gray-300 rounded-lg p-2 outline-gray-800"
        >
          <option value="" disabled>
            Select a list
          </option>
          {lists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.listType}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 h-max px-4 py-2">
        {selectedList && selectedList.items.length === 0 ? (
          <div className="text-center text-gray-500">
            No hay animes en esta lista
          </div>
        ) : (
          selectedList &&
          selectedList.items.map((anime, index) => (
            <RowAnimeListCard
              key={index}
              anime={anime}
              index={index}
              openModal={openModal}
            />
          ))
        )}
      </div>
    </div>
  );
};

Listas.propTypes = {
  lists: PropTypes.array.isRequired,
  selectedList: PropTypes.shape({
    items: PropTypes.array,
    id: PropTypes.string,
  }),
  setSelectedList: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Listas;
