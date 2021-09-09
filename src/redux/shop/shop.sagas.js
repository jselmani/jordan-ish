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

export function* fetchAllShoes() {
    const collectionMap = shoes;

    yield put(fetchShoesSuccess(collectionMap));
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
