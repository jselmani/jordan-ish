import React from "react";

import jordanLogoBlack from "../../images/jordan-logo-black.png";

import "./JordanSpinner.styles.scss";

const JordanSpinner = () => {
  return (
    <div className="jordan-spinner-container">
      <img className="jordan-spinner" src={jordanLogoBlack} alt="Jordan Logo" />
    </div>
  );
};

export default JordanSpinner;
