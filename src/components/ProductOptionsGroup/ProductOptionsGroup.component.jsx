import React from "react";

const ProductOptionsGroup = (props) => {
  const { isPrimary, primaryImages, secondaryImages, handleClick } = props;

  return (
    <div className="product-options">
      <div className="product-option" onClick={() => handleClick(true)}>
        <img
          className={isPrimary ? "selected" : ""}
          src={primaryImages[0]}
          alt="Option 1"
        />
      </div>
      <div className="product-option" onClick={() => handleClick(false)}>
        <img
          className={isPrimary ? "" : "selected"}
          src={secondaryImages[0]}
          alt="Option 2"
        />
      </div>
    </div>
  );
};

export default ProductOptionsGroup;
