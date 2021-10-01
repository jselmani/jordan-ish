import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, inverted, ...props }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
