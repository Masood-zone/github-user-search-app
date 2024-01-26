import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar({ input, setInput, handleSubmit }) {
  return (
    <div>
      <div className="w-full bg-card-background  rounded-lg flex flex-col px-2 py-2">
        <div className="flex items-center justify-between w-full">
          {/* Search bar */}
          <div className="relative">
            <FiSearch
              className="absolute top-2 left-2 text-search-icon-bg"
              fontSize={30}
            />
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="w-96 py-3 px-5 ml-10 bg-transparent focus:outline-none text-gray"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            className="bg-button-bg py-2 px-7 text-sm text-[#fff] rounded-md mx-2 hover:bg-[#6c6cc4]"
            onClick={() => handleSubmit()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
