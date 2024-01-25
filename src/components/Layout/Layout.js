import React from "react";
import Header from "../Header/Header";
import SearchBar from "../Search/Search";
import Card from "../Card/Card";

function Layout() {
  return (
    <main className="max-w-screen-tablet flex flex-col gap-5 m-auto justify-center items-center">
      <Header />
      <SearchBar />
      <Card />
    </main>
  );
}

export default Layout;
