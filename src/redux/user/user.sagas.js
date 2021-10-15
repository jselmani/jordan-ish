import { takeLatest, put, all, call } from "redux-saga/effects";
import { getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import UserActionTypes from "./user.types";
import {
  createUserProfileDocument,
  getCurrentUser,
  auth,
} from "../../firebase/firebase.utils";

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

// SIGN IN
function* signInWithEmail({ payload: { signInEmail, signInPassword } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(
      auth,
      signInEmail,
      signInPassword
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// SIGN OUT
export function* signUserOut() {
  try {
    yield signOut(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signUserOut);
}

// SIGN UP
export function* signUp({
  payload: { signUpEmail, signUpPassword, displayName },
}) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPassword
    );
    yield put(signUpSuccess({ user, data: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, data } }) {
  yield getSnapshotFromUserAuth(user, data);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

// AUTH CHECKS
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// RETRIEVE SNAPSHOT
function* getSnapshotFromUserAuth(userAuth, data) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, data);
    const userSnapshot = yield getDoc(userRef);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
