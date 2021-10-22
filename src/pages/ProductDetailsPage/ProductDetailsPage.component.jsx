import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import "./ProductDetailsPage.styles.scss";
import ProductImages from "../../components/ProductImages/ProductImages.component";
import ProductOptionsGroup from "../../components/ProductOptionsGroup/ProductOptionsGroup.component";
import SizeOptionsGroup from "../../components/SizeOptionsGroup/SizeOptionsGroup.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import JordanSpinner from "../../components/JordanSpinner/JordanSpinner.component";
import {
  SuccessToast,
  ErrorToast,
} from "../../components/Toasts/Toasts.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleModalHidden } from "../../redux/user/user.actions";
import { selectProductById } from "../../redux/shop/shop.selectors";
import { addCartItem } from "../../redux/cart/cart.actions";
import { addFavouriteItem } from "../../redux/favourite/favourite.actions";

import useStartActions, { FetchTypes } from "../../hooks/useStartActions";
import { ProductType } from "../../helpers/ProductType";

const ProductLoaded = ({ dispatch, productId, currentUser }) => {
  const product = useSelector(selectProductById(productId));
  const {
    description,
    name,
    price,
    primaryImages,
    secondaryImages,
    tag,
    gender,
    sizes,
  } = product;

  const [isPrimary, setIsPrimary] = useState(true);
  const [productSize, setProductSize] = useState(null);

  // event handlers
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAddToCart = () => {
    if (productSize) {
      const productToAdd = {
        size: productSize,
        specificId: isPrimary ? product.id[0] : product.id[1],
        isPrimary,
        toastType: ProductType.CART,
        ...product,
      };
      dispatch(addCartItem(productToAdd));
      toast((t) => <SuccessToast t={t} {...productToAdd} />);
    } else {
      toast((t) => <ErrorToast t={t} />);
    }
  };

  const handleAddToFavourites = () => {
    const favouriteProduct = {
      specificId: isPrimary ? product.id[0] : product.id[1],
      isPrimary,
      toastType: ProductType.FAVOURITE,
      ...product,
    };
    dispatch(addFavouriteItem(favouriteProduct));
    toast((t) => <SuccessToast t={t} {...favouriteProduct} />);
  };

  const handleClick = (value) => {
    setIsPrimary(value);
    if (value) {
      window.history.replaceState(null, "", product.id[0]);
    } else {
      window.history.replaceState(null, "", product.id[1]);
    }
  };

  const dispatchModal = () => {
    dispatch(toggleModalHidden());
  };

  return (
    <div className="product-details-page">
      <div className="product-title">
        <h1>{name.toUpperCase()}</h1>
      </div>
      <div className="product-info">
        <ProductImages
          isPrimary={isPrimary}
          primaryImages={primaryImages}
          secondaryImages={secondaryImages}
        />
        <div className="product-details">
          <h2 className="product-details-title">PRODUCT DETAILS</h2>
          {secondaryImages ? (
            <ProductOptionsGroup
              isPrimary={isPrimary}
              primaryImages={primaryImages}
              secondaryImages={secondaryImages}
              handleClick={handleClick}
            />
          ) : null}
          <span className="product-price .product-gender">
            ${price} | {gender.toUpperCase()}
          </span>
          <span className="product-tag">{tag.toUpperCase()}</span>
          <form onSubmit={handleSubmit} className="product-add-to-cart-form">
            <div className="shoe-size-container">
              <span className="shoe-size-title">Select Size</span>
              <SizeOptionsGroup
                sizes={sizes}
                productSize={productSize}
                setProductSize={setProductSize}
              />
            </div>
            <div className="product-description">{description}</div>
          </form>
          <div className="product-buttons">
            <CustomButton maxWidth onClick={handleAddToCart}>
              <h3>ADD TO BAG</h3>
            </CustomButton>
            <CustomButton
              maxWidth
              onClick={currentUser ? handleAddToFavourites : dispatchModal}
              inverted
            >
              <h3>ADD TO FAVOURITES</h3>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  const { isProductLoaded } = useStartActions(FetchTypes.PRODUCT, productId);

  return !isProductLoaded ? (
    <JordanSpinner />
  ) : (
    <ProductLoaded
      dispatch={dispatch}
      productId={productId}
      currentUser={currentUser}
    />
  );
};

export default ProductDetailsPage;
