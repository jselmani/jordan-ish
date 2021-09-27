import {
    takeLatest,
    call,
    put,
    all
} from 'redux-saga/effects';

import {
    fetchShoesSuccess,
    fetchShoeByIdSuccess
} from './shop.actions';

import ShopActionTypes from './shop.types';
import shoes from './shop.data';

/**
 * TODOS:
 * Create Backend to Fetch Data from
 * Heroku, Glitch, or Firebase 
 * Fetch data from backend rather than local array
 */

function* fetchAllShoes() {
    yield put(fetchShoesSuccess(shoes));
}

function* fetchAllShoesStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_ALL_SHOES_START,
        fetchAllShoes
    );
}

function* fetchShoeById({ id }) {
    const shoe = shoes[id - 1];
    yield put(fetchShoeByIdSuccess(shoe));
}

function* fetchShoeByIdStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_SHOE_BY_ID_START,
        fetchShoeById
    );
}

export function* shopSagas() {
    yield all([
        call(fetchAllShoesStart),
        call(fetchShoeByIdStart)
    ]);
}
