import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({
  children,
  inverted,
  maxWidth,
  favourite,
  ...props
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        maxWidth ? "max-width" : ""
      } ${favourite ? "favourite" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
