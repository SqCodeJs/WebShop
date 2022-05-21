import { ADD_NAME, EDIT_NAME, DELETE_NAME } from "../actions/duck/types.js";

export const appReducer = (
  state = { names: ["Tomek", "Klaudia"], test: "ok" },
  action
) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, names: [...state.names, action.name] };

    case EDIT_NAME:
      return {
        ...state,
        names: [
          ...state.names.filter((e) => e !== action.name),
          action.newName,
        ],
      };

    case DELETE_NAME:
      return { ...state, names: state.names.filter((e) => e !== action.name) };
    default:
      return state;
  }
};
