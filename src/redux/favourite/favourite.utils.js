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

export const removeItemFromCart = (favouriteItems, favouriteItemToRemove) => {
  const existingFavouriteItem = favouriteItems.find(
    (favouriteItem) =>
      favouriteItem.specificId === favouriteItemToRemove.specificId
  );

  if (existingFavouriteItem) {
    const itemToDelete = favouriteItems
      .map((favouriteItem) => favouriteItem.specificId)
      .indexOf(favouriteItemToRemove.specificId);

    ~itemToDelete && favouriteItems.splice(itemToDelete, 1);
  }

  return [...favouriteItems];
};
