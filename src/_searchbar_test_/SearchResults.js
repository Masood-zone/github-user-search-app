import React from "react";
import List from "./List";

function SearchResults({ results, handleChoice }) {
  const handleSelection = (result) => {
    return handleChoice(result);
  };
  return (
    <div className="bg-[#fff] w-full flex flex-col shadow-lg rounded-lg mt-[1rem] max-h-[300px] overflow-y-scroll">
      {results.map((list) => (
        <List key={list.id} result={list} handleSelection={handleSelection} />
      ))}
    </div>
  );
}

export default SearchResults;
