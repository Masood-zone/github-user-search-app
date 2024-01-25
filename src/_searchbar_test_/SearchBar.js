import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const filterSearchResults = response?.data?.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      setResults(filterSearchResults);
      return filterSearchResults;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="flex items-center bg-[#fff] w-full rounded-md h-10 px-[15px] shadow-lg">
      <FaSearch className="text-search-icon-bg" />
      <input
        placeholder="Enter github username..."
        className="bg-transparent border-none w-full h-full text-[16px] ml-[5px] focus:outline-none"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
