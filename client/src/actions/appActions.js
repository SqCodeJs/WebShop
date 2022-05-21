import { ADD_NAME, EDIT_NAME, DELETE_NAME } from "./duck/types.js";
import { bindActionCreators } from "redux";
import store from "../store/store";

const addName = (name) => ({ type: ADD_NAME, name });
const delateName = (name) => ({ type: DELETE_NAME, name });
const editName = (name, newName) => ({ type: EDIT_NAME, name, newName });
const namesActions = bindActionCreators(
  { add: addName, delete: delateName, edit: editName },
  store.dispatch
);

export { namesActions };
