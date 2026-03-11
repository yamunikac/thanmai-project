import React from "react";

function SearchBar({ setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search dogs, cats..."
        className="search"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchBar;