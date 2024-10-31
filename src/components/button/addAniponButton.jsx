import icons from "../../assets/icon";
const AddAniponButton = () => {
  return (
    <button className="bg-light-gray mt-5 rounded-full p-2 drop-shadow-lg w-fit h-fit aspect-square">
      <div className="h-4 w-4 rounded-full bg-blue-button">
        <icons.plusIcon stroke="white" width="1rem" height="1rem" />
      </div>
    </button>
  );
};

export default AddAniponButton;
