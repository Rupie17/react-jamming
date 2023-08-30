import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

//  returns the results from a search.
const SearchResults = (props) => {
  // grabbing props from app.js
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
