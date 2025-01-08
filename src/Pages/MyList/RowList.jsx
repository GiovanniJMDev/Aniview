import PropTypes from "prop-types";
import RowAnimeListCard from "../../Components/Lists/RowAnimeListCard";
const Listas = ({ lists, selectedList, setSelectedList, openModal }) => {
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
          className="border border-gray-300 rounded-lg p-2 outline-gray-800"
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
          <RowAnimeListCard
            key={index}
            anime={anime}
            index={index}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
};

Listas.propTypes = {
  lists: PropTypes.shape({
    find: PropTypes.func,
    map: PropTypes.func,
  }),
  selectedList: PropTypes.shape({
    animes: PropTypes.shape({
      map: PropTypes.func,
    }),
    id_list: PropTypes.any,
  }),
  setSelectedList: PropTypes.func,
  openModal: PropTypes.func,
};

export default Listas;
