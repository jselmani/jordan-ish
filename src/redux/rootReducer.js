import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    shop: shopReducer
});

export default rootReducer;
