import React from "react";

const SubCategory = props => {
  console.log("Sub Category", props);

  const activeCategory = props.data.filter(
    cat => props.slugify(cat.title) === props.match.params.catSlug
  )[0];

  const activeSubCategory = activeCategory.sub.filter(
    subcat => props.slugify(subcat.title) === props.match.params.subcatSlug
  )[0];

  return (
    <section className="content">
      <div className="content-header">
        <h2>{activeSubCategory.title}</h2>
        <button>Buy</button>
      </div>
    </section>
  );
};

export default SubCategory;
