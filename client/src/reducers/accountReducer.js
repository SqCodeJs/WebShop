import { SET_USER } from "../actions/duck/types.js";

const initialState = {
  isAuthenticated: false,
  user: {},
};
export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.user, isAuthenticated: true };

    default:
      return state;
  }
};
