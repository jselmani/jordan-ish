import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);

export const selectShowModal = createSelector(
  selectUser,
  (user) => user.showModal
);

export const selectErrorMessage = createSelector(
  selectUser,
  (user) => user.error
);
