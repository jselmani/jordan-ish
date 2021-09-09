import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    shoes: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_ALL_SHOES_START:
        case ShopActionTypes.FETCH_MENS_SHOES_START:
        case ShopActionTypes.FETCH_WOMENS_SHOES_START:
        case ShopActionTypes.FETCH_AJ1_SHOES_START:
        case ShopActionTypes.FETCH_BBALL_SHOES_START:
        case ShopActionTypes.FETCH_SNKRS_SHOES_START:
        case ShopActionTypes.FETCH_CUSTOM_PARAMS_START:    
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
