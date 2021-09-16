import {
    takeLatest,
    call,
    put,
    all
} from 'redux-saga/effects';

import {
    fetchShoesSuccess,
    // fetchCollectionFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';
import shoes from './shop.data';

/**
 * TODOS:
 * Create Backend to Fetch Data from
 * Deploy backend to Heroku or Glitch
 * Fetch data from backend rather than local array
 */

export function* fetchAllShoes() {
    yield put(fetchShoesSuccess(shoes));
}

export function* fetchAllShoesStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_ALL_SHOES_START,
        fetchAllShoes
    );
}

export function* shopSagas() {
    yield all([
        call(fetchAllShoesStart)
    ]);
}
