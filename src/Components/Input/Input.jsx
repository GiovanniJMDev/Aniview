import PropTypes from "prop-types";
import icons from "../../assets/icon";
import { useState } from "react";
const Input = ({
  name = "",
  placeholder,
  error,
  value,
  onChange,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col">
      <label className={` ${error ? "text-red-500" : "text-gray-500"}`}>
        {name}
      </label>
      <div className="relative">
        <input
          placeholder={error ? error : placeholder}
          className={`w-full focus:outline-hidden border-2 ${
            error
              ? "border-red-500 text-red-500 placeholder:text-red-500"
              : "border-gray-300 text-gray-500 placeholder:text-gray-400"
          } rounded-md px-4 py-2 pr-10`} // Add padding-right to make space for the icon
          value={value}
          type={type === "password" && !showPassword ? "password" : "text"}
          name={name.toLowerCase().replace(/ /g, "_")}
          onChange={(e) => {
            onChange(e);
            if (error) {
              onChange(e);
            }
          }}
        />
        {type === "password" && (
          <button
            onClick={() => setShowPassword(!showPassword)} // This will toggle the visibility of the password
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <icons.slashEyeIcon fill="#252525" />
            ) : (
              <icons.eyeIcon fill="#252525" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.bool, // The 'error' should be a boolean (true/false)
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
