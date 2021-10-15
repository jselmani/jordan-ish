import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import "./Modal.styles.scss";
import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";
import CustomRadioButton from "../CustomRadioButton/CustomRadioButton.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { togglefavouriteModal } from "../../redux/favourite/favourite.actions";
import { selectModalItem } from "../../redux/favourite/favourite.selectors";

import { addCartItem } from "../../redux/cart/cart.actions";

import { ModalFlow } from "../../helpers/ModalFlow";

const FavouriteModal = () => {
  const dispatch = useDispatch();
  const [shoeSize, setShoeSize] = useState(null);
  const [error, setError] = useState(null);
  const modalItem = useSelector(selectModalItem);

  const { sizes, name, primaryImages, secondaryImages, isPrimary } = modalItem;

  const handleCloseModal = () => {
    dispatch(togglefavouriteModal());
  };

  const handleAddToCart = () => {
    if (shoeSize) {
      setError(null);
      const productToAdd = {
        size: shoeSize,
        ...modalItem,
      };
      dispatch(addCartItem(productToAdd));
      dispatch(togglefavouriteModal());
    } else {
      setError("You have to pick a size to add the product to your bag.");
    }
  };

  return (
    <div className="favourite-modal">
      <div className="close-favourite-modal" onClick={handleCloseModal}>
        <FaTimes className="close-button" />
      </div>
      <div className="favourite-details">
        {isPrimary ? (
          <img className="primary-image" src={primaryImages[0]} alt={name} />
        ) : (
          <img
            className="secondary-image"
            src={secondaryImages[0]}
            alt={name}
          />
        )}
        <div className="favourite-name">
          <h2>{name.toUpperCase()}</h2>
        </div>
      </div>
      <span className="options-title">SELECT SIZE</span>
      <div className="favourite-size-options">
        {sizes.map((size, index) => {
          return (
            <div
              className="favourite-size-option"
              key={index}
              onClick={() => setShoeSize(size)}
            >
              <CustomRadioButton
                key={index}
                size={size}
                checked={shoeSize === size}
                onChange={() => {}}
              />
            </div>
          );
        })}
      </div>
      {error && <span className="favourite-error">{error}</span>}
      <CustomButton maxWidth onClick={handleAddToCart}>
        ADD TO BAG
      </CustomButton>
    </div>
  );
};

const Modal = ({ modalFlow }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  switch (modalFlow) {
    case ModalFlow.SIGN_IN_UP_FLOW:
      return (
        <div className="modal">
          {isSignIn ? (
            <SignIn isModal={true} handleClick={handleClick} />
          ) : (
            <SignUp isModal={true} handleClick={handleClick} />
          )}
        </div>
      );
    case ModalFlow.FAVOURITE_FLOW:
      return (
        <div className="modal">
          <FavouriteModal />
        </div>
      );
    default:
      return <div />;
  }
};

export default Modal;
