import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import arrow from "../assets/images/icon-arrow.svg";
const Search = () => {
  const { input, setInput, searchIP } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchIP(input);
  };

  return (
    <div className="w-screen bg-[url('./assets/images/pattern-bg-desktop.png')] bg-cover bg-center bg-no-repeat text-white px-4 py-10 pb-28">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-1xl md:text-2xl font-bold mb-6">
          IP Address Tracker
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full max-w-2xl mx-auto">
          <input
            className="flex-grow p-3 bg-white rounded-l-lg border-t border-b border-l border-gray-300 text-black"
            type="text"
            placeholder="Search IP or Domain"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-3 bg-black cursor-pointer text-white rounded-r-lg hover:bg-black border-t border-b border-r border-gray-300 flex items-center justify-center"
            type="submit"
          >
            <img src={arrow} alt="icon-arrow" width="10px" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
