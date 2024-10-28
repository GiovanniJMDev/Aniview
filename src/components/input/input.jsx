const Input = ({ name, placeholder }) => {
  return (
    <div className="flex flex-col px-4 py-1">
      <label>{name}</label>
      <input
        placeholder={placeholder}
        className="w-full  focus:outline-none border-2 border-gray-300 rounded-md px-2 py-1"
      />
    </div>
  );
};
export default Input;
