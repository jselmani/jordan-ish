import FavouriteActionTypes from "./favourite.types";

export const addFavouriteItem = (item) => {
  return {
    type: FavouriteActionTypes.ADD_ITEM_TO_FAVOURITE,
    payload: item,
  };
};

export const removeFavouriteItem = (item) => {
  return {
    type: FavouriteActionTypes.REMOVE_ITEM_FROM_FAVOURITE,
    payload: item,
  };
};

export const clearItemFromFavourites = (item) => {
  return {
    type: FavouriteActionTypes.CLEAR_ITEM_FROM_FAVOURITE,
    payload: item,
  };
};
