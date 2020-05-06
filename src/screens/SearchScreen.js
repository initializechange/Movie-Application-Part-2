import React, {useState} from "react";
import MovieCard from "../components/MovieCard";
import TopBar from "../components/TopBar";

export default function SearchScreen() {

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <TopBar searchText={searchText} setSearchText={setSearchText}/>
      <MovieCard />
    </div>
  );
}
