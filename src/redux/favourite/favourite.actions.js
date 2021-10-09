import FavouriteActionTypes from "./favourite.types";

export const addItem = (item) => {
  return {
    type: FavouriteActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: FavouriteActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromFavourites = (item) => {
  return {
    type: FavouriteActionTypes.CLEAR_ITEM_FROM_FAVOURITE,
    payload: item,
  };
};
