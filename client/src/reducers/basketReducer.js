import { ADD_TO_BASKET } from "../actions/duck/types.js";

export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, action.item];
    default:
      return state;
  }
};
