import React, { useState } from "react";
import Header from "../Header/Header";
import SearchBar from "../Search/Search";
import { getUserInfo } from "../../utils/fetchUserData";
import Card from "../Card/Card";

function Layout() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  //Submission function
  const handleSubmit = async () => {
    if (!input) {
      // Incase he submits without inputing anything into the user
      alert("Please enter a Github username.");
    } else {
      try {
        setIsLoading(true);
        const response = await getUserInfo(input);
        setResults(response.data);
        setInput("");
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="max-w-screen-tablet flex flex-col gap-5 m-auto justify-center items-center">
      <Header />
      <SearchBar
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      {isLoading ? (
        <div className="loader mt-10"></div>
      ) : (
        results && <Card results={results} error={error} />
      )}
    </main>
  );
}

export default Layout;
