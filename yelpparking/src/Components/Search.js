import React from "react";

const Search = ({ location, setLocation }) => {
  return (
    <form className="searchForm">
      <label htmlFor="search">🔍</label>
      <input
        id="search"
        type="serach"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Search for a parking spot!"
      ></input>
    </form>
  );
};

export default Search;
