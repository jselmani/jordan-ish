import React from "react";

import "./CustomRadioButton.styles.scss";

const CustomRadioButton = ({ size, checked, onChange }) => {
  return (
    <div className={`custom-radio-button ${checked ? "selected" : ""}`}>
      <input
        type="radio"
        value={size}
        id={size}
        name="shoe-size-buttons"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={size}>{size}</label>
    </div>
  );
};

export default CustomRadioButton;
