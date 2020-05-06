import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <SearchScreen />
      </Route>

      <Route path="/detail">
        <DetailScreen />
      </Route>
    </Router>
  );
}
