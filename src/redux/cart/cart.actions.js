import CartActionTypes from "./cart.types";

export const addCartItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
