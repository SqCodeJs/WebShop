import { MOUNT } from "../actions/duck/types";
export const dbReducer = (state = [], action) => {
  switch (action.type) {
    case MOUNT:
      return { ...state, products: action.db };
    default:
      return state;
  }
};
