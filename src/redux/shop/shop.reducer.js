import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    shoes: null,
    isFilterBarHidden: true,
    isFetching: false,
    errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.TOGGLE_FILTER_BAR_HIDDEN:
            return {
                ...state,
                isFilterBarHidden: !state.isFilterBarHidden
            };
        case ShopActionTypes.FETCH_ALL_SHOES_START: 
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FETCH_SHOES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                shoes: action.payload
            };
        case ShopActionTypes.FETCH_SHOES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;
