import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./CheckoutItem.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    id,
    quantity,
    gender,
    size,
    isPrimary,
    name,
    price,
    primaryImages,
    secondaryImages,
    tag,
  } = cartItem;

  const handleClick = () => {
    history.push(`products/${id[0]}`);
  };

  return (
    <div className="checkout-item">
      <div className="checkout-item-image" onClick={handleClick}>
        {isPrimary ? (
          <img src={primaryImages[0]} alt="Jordan Shoe" />
        ) : (
          <img src={secondaryImages[0]} alt="Jordan Shoe" />
        )}
      </div>
      <div className="checkout-item-details">
        <div className="checkout-item-name-price" onClick={handleClick}>
          <span>{name.toUpperCase()}</span>
          <span>${price}</span>
        </div>
        <div className="checkout-item-tag-size">
          <span>{tag.toUpperCase()}</span>
          <span>SIZE: {size}</span>
        </div>
        <div className="checkout-item-gender">
          <span>{gender.toUpperCase()}</span>
        </div>
        <div className="checkout-item-footer">
          <div
            className="checkout-item-remove"
            onClick={() => dispatch(clearItemFromCart(cartItem))}
          >
            <span>REMOVE ITEM</span>
          </div>
          <div className="checkout-item-quantity">
            <span className="quantity">
              <div
                className="arrow"
                onClick={() => dispatch(removeItem(cartItem))}
              >
                &#10094;
              </div>
              <span className="value">QUANTITY: {quantity}</span>
              <div
                className="arrow"
                onClick={() => dispatch(addItem(cartItem))}
              >
                &#10095;
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
