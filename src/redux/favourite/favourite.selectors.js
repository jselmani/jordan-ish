import { createSelector } from "reselect";

const selectFavourites = (state) => state.favourite;

export const selectFavouriteItems = createSelector(
  selectFavourites,
  (favourite) => favourite.favouriteItems
);

export const selectFavouriteItemsCount = createSelector(
  selectFavouriteItems,
  (favouriteItems) => favouriteItems.length
);
