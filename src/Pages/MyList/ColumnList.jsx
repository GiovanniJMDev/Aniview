import PropTypes from "prop-types";
import AnimeListColumn from "../../Components/Lists/AnimeListColumn";

const ColumnList = ({ lists, openModal }) => {
  return (
    <div className="min-w-full w-max grid grid-cols-4 content-stretch h-full">
      {lists.map((list) => (
        <AnimeListColumn
          key={list.id}
          count={list.items.length}
          animes={list.items}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

ColumnList.propTypes = {
  lists: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ColumnList;
