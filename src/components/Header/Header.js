import React from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Header() {
  return (
    <header className="flex items-center justify-between  py-3 px-3 w-full">
      {/* Heading */}
      <h1 className="text-base-content text-xl font-medium">devfinder</h1>
      {/* Dark Theme Toggler */}
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="dark" />
        {/* Light Icon */}
        <MdLightMode className="swap-on fill-current w-10 h-10" />
        {/* Dark Icon */}
        <MdDarkMode className="swap-off fill-current w-10 h-10" />
      </label>
    </header>
  );
}

export default Header;
