import React from "react";

import "./Jumbotron.styles.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="hero-text">BECOME YOUR AIRNESS</h1>
      <img
        className="hero-image"
        src="https://sneakernews.com/wp-content/uploads/2019/09/air-jordan-34-zion-williamson-1.jpg"
        // src="https://air.jordan.com/wp-content/uploads/2019/09/HeroImage-D-3.jpg"
        alt="Jordan"
      />
    </div>
  );
};

export default Jumbotron;
