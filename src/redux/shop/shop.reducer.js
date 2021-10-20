import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  shoes: null,
  product: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ALL_SHOES_START:
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_SHOES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shoes: action.payload,
      };
    case ShopActionTypes.FETCH_SHOES_FAILURE:
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
