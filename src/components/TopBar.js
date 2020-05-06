import React from "react";
import SearchBar from "./SearchBar";

export default function TopBar(props) {
  return (
    <div className="h-64 bg-blue-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-4">MovieQuery</h1>
      <SearchBar searchText={props.searchText} setSearchText={props.setSearchText} />
    </div>
  );
}
