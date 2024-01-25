import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <form className="w-full bg-card-background  rounded-lg flex items-center justify-between px-2 py-2">
      <div className="relative">
        <FiSearch
          className="absolute top-2 left-2 text-search-icon-bg"
          fontSize={30}
        />
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="w-96 py-3 px-5 ml-10 bg-transparent focus:outline-none"
        />
      </div>

      <button className="bg-button-bg py-2 px-7 text-sm text-[#fff] rounded-md mx-2">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
