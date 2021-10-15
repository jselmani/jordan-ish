import UserActionTypes from "./user.types";

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const emailSignInStart = (userCreds) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userCreds,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCreds) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCreds,
});

export const signUpSuccess = ({ user, data }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, data },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const toggleModalHidden = () => ({
  type: UserActionTypes.TOGGLE_MODAL_HIDDEN,
});

export const clearErrors = () => ({
  type: UserActionTypes.CLEAR_ERRORS,
});
