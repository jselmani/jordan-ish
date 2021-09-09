import ShopActionTypes from './shop.types';

export const fetchAllShoesStart = () => ({
    type: ShopActionTypes.FETCH_ALL_SHOES_START,
});

export const fetchMensShoesStart = () => ({
    type: ShopActionTypes.FETCH_MENS_SHOES_START,
});

export const fetchWomensShoesStart = () => ({
    type: ShopActionTypes.FETCH_WOMENS_SHOES_START
});

export const fetchAirJordan1ShoesStart = () => ({
    type: ShopActionTypes.FETCH_AJ1_SHOES_START
});

export const fetchBasketballShoesStart = () => ({
    type: ShopActionTypes.FETCH_BBALL_SHOES_START
});

export const fetchSNKRSShoesStart = () => ({
    type: ShopActionTypes.FETCH_SNKRS_SHOES_START
});

export const fetchCustomParamsStart = (params) => ({
    type: ShopActionTypes.FETCH_CUSTOM_PARAMS_START,
    params
});

export const fetchShoesSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_SHOES_SUCCESS,
    payload: collectionMap
});

export const fetchShoesFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_SHOES_FAILURE,
    payload: errorMessage
});
