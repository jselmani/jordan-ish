import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_ALL_COLLECTIONS_START:
        case ShopActionTypes.FETCH_MENS_COLLECTION_START:
        case ShopActionTypes.FETCH_WOMENS_COLLECTION_START:
        case ShopActionTypes.FETCH_AJ1_COLLECTION_START:
        case ShopActionTypes.FETCH_BBALL_COLLECTION_START:
        case ShopActionTypes.FETCH_SNKRS_COLLECTION_START:
        case ShopActionTypes.FETCH_CUSTOM_PARAMS_START:    
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
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
