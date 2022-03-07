import React, { useState } from "react";
import "./searchbar.css";
import { ReactComponent as Search } from "../Icons/24px/search.svg";

const SearchBar = () => {
  const [userInput, setuserInput] = useState("");

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  return (
    <form className="searchBarContainer">
      <input
        className="searchBar"
        type="search"
        value={userInput}
        placeholder="Search"
        onChange={inputHandler}
      ></input>
      <Search className="searchIcon" />
    </form>
  );
};

export default SearchBar;
