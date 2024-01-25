import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Searchbar() {
  const [results, setResults] = useState([]);
  const handleChoice = (value) => {
    console.log(value);
  };
  return (
    <div className="bg-[#eee] h-screen w-screen">
      <div className="pt-[20vh] w-10 m-auto flex flex-col items-center min-w-[300px]">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} handleChoice={handleChoice} />
      </div>
    </div>
  );
}

export default Searchbar;
