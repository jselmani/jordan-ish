import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchShoesSuccess,
  fetchShoesFailure,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

import { db, getShoes, getShoe } from "../../firebase/firebase.utils";

function* fetchAllShoes() {
  try {
    const shoes = yield call(getShoes, db);
    yield put(fetchShoesSuccess(shoes));
  } catch (err) {
    yield put(fetchShoesFailure(err.message));
  }
}

function* fetchAllShoesStart() {
  yield takeLatest(ShopActionTypes.FETCH_ALL_SHOES_START, fetchAllShoes);
}

function* fetchProductById({ productId }) {
  const numProductId = parseInt(productId);

  try {
    const product = yield call(getShoe, db, numProductId);
    if (product !== undefined) {
      yield put(fetchProductByIdSuccess(product));
    } else {
      yield put(fetchProductByIdFailure("Product not found."));
    }
  } catch (err) {
    yield put(fetchProductByIdFailure(err.message));
  }
}

function* fetchProductByIdStart() {
  yield takeLatest(ShopActionTypes.FETCH_PRODUCT_BY_ID_START, fetchProductById);
}

export function* shopSagas() {
  yield all([call(fetchAllShoesStart), call(fetchProductByIdStart)]);
}
