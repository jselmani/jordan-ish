export const addItemToFavourite = (favouriteItems, favouriteItemToAdd) => {
  const existingFavouriteItem = favouriteItems.find(
    (favouriteItem) =>
      favouriteItem.specificId === favouriteItemToAdd.specificId
  );

  if (!existingFavouriteItem) {
    favouriteItems.push(favouriteItemToAdd);
  }

  return [...favouriteItems];
};
