import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  // handles the user typing
  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);
  // use callback caches between renders, giving back same info unless props change.
  // handles the button click.
  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
