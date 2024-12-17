import PropTypes from "prop-types"
import AnimeListColumn from "../../components/Lists/AnimeListColumn";

const ColumnList = ({ lists, openModal }) => {
  return (
    <div className="min-w-full w-max grid grid-cols-4 content-stretch h-full">
      {lists.map((list) => (
        <AnimeListColumn
          key={list.is_list}
          count={list.animes.length}
          animes={list.animes}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

ColumnList.propTypes = {
  lists: PropTypes.shape({
    map: PropTypes.func
  }),
  openModal: PropTypes.func
}

export default ColumnList;
