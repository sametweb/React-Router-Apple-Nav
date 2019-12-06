import React from "react";
import { Route, NavLink } from "react-router-dom";

import HomePage from "./HomePage";
import Category from "./Category";

const Home = props => {
  console.log("Home", props);

  return (
    <>
      <nav className="main-navigator">
        {props.data.map((link, index) => (
          <NavLink key={index} to={`/${props.slugify(link.title)}`}>
            {link.title}
          </NavLink>
        ))}
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/:catSlug"
        render={renderProps => (
          <Category
            {...renderProps}
            data={props.data}
            slugify={props.slugify}
          />
        )}
      />
    </>
  );
};

export default Home;
