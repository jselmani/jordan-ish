import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./ProductCard.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";

import { clearItemFromFavourites } from "../../redux/favourite/favourite.actions";

const FavouriteCard = (props) => {
  const dispatch = useDispatch();

  const {
    isPrimary,
    name,
    price,
    gender,
    primaryImages,
    secondaryImages,
    tag,
    type,
    routeToProduct,
  } = props;

  const handleRemoveItem = () => {
    dispatch(clearItemFromFavourites(props));
  };

  return (
    <div className="product-card favourite">
      {isPrimary ? (
        <img
          className="primary-image"
          src={primaryImages[0]}
          alt={name}
          onClick={routeToProduct}
        />
      ) : (
        <img
          className="primary-image"
          src={secondaryImages[0]}
          alt={name}
          onClick={routeToProduct}
        />
      )}
      <div className="tag">
        <span>{tag}</span>
      </div>
      <div className="product-content">
        <div className="product-price">
          <span>${price}</span>
        </div>
        <div className="product-gender .product-type">
          <span>
            {gender} | {type}
          </span>
        </div>
        <div className="product-name">
          <span>{name}</span>
        </div>
      </div>
      <div className="product-buttons">
        <CustomButton maxWidth favourite onClick={handleRemoveItem} inverted>
          REMOVE ITEM
        </CustomButton>
        <CustomButton maxWidth favourite>
          CHOOSE SIZE
        </CustomButton>
      </div>
    </div>
  );
};

const ShoppingCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    gender,
    name,
    price,
    primaryImages,
    secondaryImages,
    tag,
    type,
    routeToProduct,
  } = props;

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img
        className="primary-image"
        src={primaryImages[0]}
        alt={name}
        onClick={routeToProduct}
      />
      {isVisible && secondaryImages ? (
        <img
          className="secondary-image"
          src={secondaryImages[0]}
          alt={name}
          onClick={routeToProduct}
        />
      ) : (
        <div />
      )}
      <div className="tag">
        <span>{tag}</span>
      </div>
      <div className="product-content">
        <div className="product-price">
          <span>${price}</span>
        </div>
        <div className="product-gender .product-type">
          <span>
            {gender} | {type}
          </span>
        </div>
        <div className="product-name">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

const ProductCard = (props) => {
  const { favourite } = props;
  return favourite ? <FavouriteCard {...props} /> : <ShoppingCard {...props} />;
};

export default ProductCard;
