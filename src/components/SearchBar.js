import React from "react";

export default function SearchBar(props) {
  return (
    <form>
      <input
        className="font-bold h-12 searchBar rounded-full pl-4 shadow-md"
        placeholder="Search for movies..."
        value={props.searchText}
        onChange={object => {
          props.setSearchText(object.target.value);
        }}
      />
    </form>
  );
}
