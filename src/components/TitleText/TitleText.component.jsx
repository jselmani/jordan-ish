import React from "react";

import "./TitleText.styles.scss";

const TitleText = ({ title, subtitle }) => {
  return (
    <div className="title-text">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default TitleText;
