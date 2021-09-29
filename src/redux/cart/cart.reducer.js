import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default cartReducer;
