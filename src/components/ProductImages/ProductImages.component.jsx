import React from "react";

import ProductImageCarousel from "../ProductImageCarousel/ProductImageCarousel.component";

const ProductImages = ({ isPrimary, primaryImages, secondaryImages }) => {
  return (
    <div className="product-images-container">
      {isPrimary ? (
        <ProductImageCarousel
          className="primary-image"
          images={primaryImages}
        />
      ) : (
        <ProductImageCarousel
          className="secondary-image"
          images={secondaryImages}
        />
      )}
    </div>
  );
};

export default ProductImages;
