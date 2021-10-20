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

export const fetchProductByIdStart = (productId) => ({
  type: ShopActionTypes.FETCH_PRODUCT_BY_ID_START,
  productId: productId,
});

export const fetchProductByIdSuccess = (product) => ({
  type: ShopActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
  payload: product,
});

export const fetchProductByIdFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_PRODUCT_BY_ID_FAILURE,
  payload: errorMessage,
});
