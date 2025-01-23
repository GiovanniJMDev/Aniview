import PropTypes from "prop-types"
import { useState } from "react";
import icons from "../../assets/icon";

const AddAniponButton = ({ suggestions, handleAddAnime }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue("");
    handleAddAnime(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative">
      <div className="bg-light-gray my-4 rounded-2xl py-2 px-4 drop-shadow-lg w-fit h-fit flex items-center gap-4">
        <input
          type="text"
          name="input"
          id="home_input"
          className="bg-transparent border-none focus:outline-none text-onix placeholder:text-gray-400 w-fit border-gray-300"
          placeholder="Add a gender"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="h-4 w-4 rounded-full bg-blue-button">
          <icons.plusIcon stroke="white" width="1rem" height="1rem" />
        </div>
      </div>
      {filteredSuggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md max-h-40 overflow-y-auto w-full shadow-lg z-10 bottom-[90%] left-0">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              tabIndex="0" // Hace que el li sea enfocable
              onClick={() => handleSuggestionClick(suggestion)} // Maneja el clic
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSuggestionClick(suggestion); // Maneja el Enter para seleccionar
                }
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AddAniponButton.propTypes = {
  handleAddAnime: PropTypes.func,
  suggestions: PropTypes.shape({
    filter: PropTypes.func
  })
}

export default AddAniponButton;
