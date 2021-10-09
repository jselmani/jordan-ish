import CartActionTypes from "./cart.types";

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
