import React from "react";

function List({ result, handleSelection }) {
  return (
    <div
      role="button"
      onClick={(e) => handleSelection(e.target.textContent)}
      className="mx-1 my-1 py-1 px-1 rounded-md hover:bg-[#f1f1f1] w-full hover:cursor-pointer"
    >
      {result.name}
    </div>
  );
}

export default List;
