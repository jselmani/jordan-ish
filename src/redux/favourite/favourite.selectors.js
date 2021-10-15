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

export const selectFavouriteModal = createSelector(
  selectFavourites,
  (favourite) => favourite.showModal
);

export const selectModalItem = createSelector(
  selectFavourites,
  (favourites) => favourites.modalItem
);
