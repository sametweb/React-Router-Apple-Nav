import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";

import data from "./data";

const slugify = title =>
  title
    .split(" ")
    .join("-")
    .toLowerCase();

const App = () => {
  return (
    <div className="wrapper">
      <Route
        path="/"
        render={props => <Home {...props} data={data} slugify={slugify} />}
      />
    </div>
  );
};

export default App;
