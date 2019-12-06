import React from "react";
import { Route, NavLink } from "react-router-dom";

import SubCategory from "./SubCategory";

const Category = props => {
  console.log("Category", props);

  const activeCategory = props.data.filter(
    cat => props.slugify(cat.title) === props.match.params.catSlug
  )[0];

  console.log(activeCategory.sub);

  return (
    <>
      <div className="sub-navigator">
        {activeCategory.sub.map((subcat, index) => (
          <NavLink
            key={index}
            to={`${props.match.url}/${props.slugify(subcat.title)}`}
          >
            {subcat.title}
          </NavLink>
        ))}
      </div>
      <Route
        path="/:catSlug/:subcatSlug"
        render={renderProps => (
          <SubCategory
            {...renderProps}
            data={activeCategory.sub}
            slugify={props.slugify}
          />
        )}
      />
    </>
  );
};

export default Category;
