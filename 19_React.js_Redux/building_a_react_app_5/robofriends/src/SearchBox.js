import React from "react";

// const SearchBox = () => {
  /* we are using destructuring here:
  ({...}) -- allows us to grab the props object and its properties.
  **searchfield is actually not used and will be removed in upcoming lecture/lesson */
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="search robots" 
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;