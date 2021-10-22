import React from "react";

import CustomRadioButton from "../CustomRadioButton/CustomRadioButton.component";

const SizeOptionsGroup = ({ sizes, productSize, setProductSize }) => {
  return (
    <div className="shoe-size-options">
      {sizes.map((size, index) => {
        return (
          <div
            className="shoe-size-option"
            key={index}
            onClick={() => setProductSize(size)}
          >
            <CustomRadioButton
              key={index}
              size={size}
              checked={productSize === size}
              onChange={() => {}}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SizeOptionsGroup;
