const Input = ({ name, placeholder, error }) => {
  return (
    <div className="flex flex-col  py-1">
      <label className={`	 ${error ? " text-red-500" : " text-gray-500"}`}>
        {name}
      </label>
      <input
        placeholder={placeholder}
        className={`w-full focus:outline-none border-2 ${
          error
            ? "border-red-500 text-red-500"
            : "border-gray-300 text-gray-500"
        } rounded-md px-2 py-1`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
