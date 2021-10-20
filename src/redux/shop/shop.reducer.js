import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  shoes: null,
  product: null,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ALL_SHOES_START:
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_START:
      return {
        ...state,
      };
    case ShopActionTypes.FETCH_SHOES_SUCCESS:
      return {
        ...state,
        shoes: action.payload,
      };
    case ShopActionTypes.FETCH_SHOES_FAILURE:
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
