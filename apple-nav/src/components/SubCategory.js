import React from "react";

const SubCategory = props => {
  console.log("Sub Category", props);

  const activeSubCategory = props.data.filter(
    subcat => props.slugify(subcat.title) === props.match.params.subcatSlug
  )[0];

  console.log(activeSubCategory.title);

  return (
    <section className="content">
      <h2>{activeSubCategory.title}</h2>
    </section>
  );
};

export default SubCategory;
