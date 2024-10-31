import icons from "../../assets/icon";

const RemoveAniponButton = ({ title }) => {
  return (
    <button className="bg-light-gray rounded-2xl mt-5 p-2 drop-shadow-lg w-fit h-fit items-center px-4 gap-3 flex flex-row">
      <span>{title}</span>
      <div className="h-4 w-4 rounded-full bg-raspberry-red">
        <icons.lessIcon stroke="white" width="1rem" height="1rem" />
      </div>
    </button>
  );
};

export default RemoveAniponButton;
