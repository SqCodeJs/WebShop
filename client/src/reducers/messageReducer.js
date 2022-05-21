import { SET_LOG_INFO } from "../actions/duck/types.js";

export const messageReducer = (state = { loginMessage: "" }, action) => {
  switch (action.type) {
    case SET_LOG_INFO:
      return { ...state, loginMessage: action.message };
    default:
      return state;
  }
};
