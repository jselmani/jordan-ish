import FavouriteActionTypes from "./favourite.types";
import { addItemToFavourite, removeItemFromFavourite } from "./favourite.utils";

const INITIAL_STATE = {
  favouriteItems: [],
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouriteActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToFavourite(state.favouriteItems, action.payload),
      };
    case FavouriteActionTypes.REMOVE_ITEM:
      return {
        ...state,
        favouriteItems: removeItemFromFavourite(
          state.favouriteItems,
          action.payload
        ),
      };
    case FavouriteActionTypes.CLEAR_ITEM_FROM_FAVOURITE:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (favouriteItem) =>
            favouriteItem.specificId !== action.payload.specificId
        ),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
