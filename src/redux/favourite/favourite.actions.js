import FavouriteActionTypes from "./favourite.types";

export const addFavouriteItem = (item) => ({
  type: FavouriteActionTypes.ADD_ITEM_TO_FAVOURITE,
  payload: item,
});

export const clearItemFromFavourites = (item) => ({
  type: FavouriteActionTypes.CLEAR_ITEM_FROM_FAVOURITE,
  payload: item,
});

export const togglefavouriteModal = (item) => ({
  type: FavouriteActionTypes.TOGGLE_FAVOURITE_MODAL,
  payload: item,
});
