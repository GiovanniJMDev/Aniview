const Input = ({ name = "", placeholder, error, value, onChange, type }) => {
  return (
    <div className="flex flex-col">
      <label className={` ${error ? "text-red-500" : "text-gray-500"}`}>
        {name}
      </label>
      <input
        placeholder={error ? error : placeholder}
        className={`w-full focus:outline-none border-2 ${
          error
            ? "border-red-500 text-red-500 placeholder:text-red-500"
            : "border-gray-300 text-gray-500 placeholder:text-gray-400"
        } rounded-md px-4 py-2`}
        value={value}
        type={type}
        name={name.toLowerCase().replace(/ /g, "_")}
        autoComplete={type === "password" ? "current-password" : "email"}
        onChange={(e) => {
          onChange(e);
          if (error) {
            error = undefined;
          }
        }}
      />
      {/* {error && <span className="text-red-500 text-sm mt-1">{error}</span>} */}
    </div>
  );
};

export default Input;
