import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    shop: shopReducer,
    cart: cartReducer
});

export default rootReducer;
