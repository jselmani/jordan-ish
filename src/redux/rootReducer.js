import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import favouriteReducer from "./favourite/favourite.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favourite"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
  favourite: favouriteReducer,
});

export default persistReducer(persistConfig, rootReducer);
