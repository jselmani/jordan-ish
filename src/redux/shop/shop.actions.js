import ShopActionTypes from "./shop.types";

export const fetchAllShoesStart = () => ({
  type: ShopActionTypes.FETCH_ALL_SHOES_START,
});

export const fetchShoesSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_SHOES_SUCCESS,
  payload: collectionMap,
});

export const fetchShoesFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_SHOES_FAILURE,
  payload: errorMessage,
});

export const fetchShoeByIdStart = (shoeId) => ({
  type: ShopActionTypes.FETCH_SHOE_BY_ID_START,
  shoeId: shoeId,
});

export const fetchShoeByIdSuccess = (shoe) => ({
  type: ShopActionTypes.FETCH_SHOE_BY_ID_SUCCESS,
  payload: shoe,
});

export const fetchShoeByIdFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_SHOE_BY_ID_FAILURE,
  payload: errorMessage,
});
