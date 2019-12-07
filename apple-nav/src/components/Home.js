import React from "react";
import { Route, NavLink } from "react-router-dom";

import HomePage from "./HomePage";
import Category from "./Category";
import SubCategory from "./SubCategory";

import logo from "../components/logo.png";

const Home = props => {
  console.log("Home", props);

  return (
    <>
      <nav className="main-navigator">
        <NavLink to="/">
          <img src={logo} style={{ width: 25, height: 25 }} />
        </NavLink>
        {props.data.map((link, index) => (
          <NavLink key={index} to={`/${props.slugify(link.title)}`}>
            {link.title}
          </NavLink>
        ))}
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/:catSlug"
        render={renderProps => (
          <Category
            {...renderProps}
            data={props.data}
            slugify={props.slugify}
          />
        )}
      />

      <Route
        path="/:catSlug/:subcatSlug"
        render={renderProps => (
          <SubCategory
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
