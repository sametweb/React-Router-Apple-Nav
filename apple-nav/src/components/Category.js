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
      <section className="content">
        <h2>Main Category: {activeCategory.title}</h2>
        <p>
          This is the landing page for main categories. When a main category is
          selected but not a sub category, this page renders. A specific page
          for each main category can be shown here based on the data coming from
          API or using match.params.catSlug with a switch/case statement.
        </p>
      </section>
    </>
  );
};

export default Category;
