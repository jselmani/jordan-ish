import React from "react";

import "./FormInput.styles.scss";

const FormInput = (props) => {
  const { handleChange, label } = props;

  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
