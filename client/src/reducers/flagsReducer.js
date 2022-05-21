import { TOGGLE } from "../actions/duck/types.js";

export const flagsReducer = (state = { hamburger: false }, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, hamburger: action.toggle };
    default:
      return state;
  }
};
