import React from "react";

const HomePage = () => {
  return (
    <section className="content">
      <h2>Welcome to Homepage!</h2>
      <p>
        We can use this HomePage component as a homepage content section. It
        will only be rendered when none of the menu links are selected
        (route="/").
      </p>
    </section>
  );
};

export default HomePage;
