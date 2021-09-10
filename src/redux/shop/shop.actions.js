import ShopActionTypes from './shop.types';

export const fetchAllShoesStart = () => ({
    type: ShopActionTypes.FETCH_ALL_SHOES_START,
});

export const fetchShoesSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_SHOES_SUCCESS,
    payload: collectionMap
});

export const fetchShoesFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_SHOES_FAILURE,
    payload: errorMessage
});
