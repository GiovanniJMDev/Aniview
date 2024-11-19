import icons from "../../assets/icon";
const AddAniponButton = () => {
  return (
    <button className="bg-light-gray my-4 rounded-2xl py-2 px-4 drop-shadow-lg w-fit h-fit flex items-center gap-4  ">
      <span>Añadir</span>
      <div className="h-4 w-4 rounded-full bg-blue-button">
        <icons.plusIcon stroke="white" width="1rem" height="1rem" />
      </div>
    </button>
  );
};

export default AddAniponButton;
