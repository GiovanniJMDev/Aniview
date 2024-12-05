import AnimeListColumn from "../../components/lists/AnimeListColumn";

const ColumnList = ({ lists }) => {
  return (
    <div className="min-w-full w-max grid grid-cols-4 content-stretch h-full">
      {lists.map((list) => (
        <AnimeListColumn
          key={list.is_list}
          count={list.animes.length}
          animes={list.animes}
        />
      ))}
    </div>
  );
};

export default ColumnList;
