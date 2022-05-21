import { TOGGLE } from "./duck/types.js";
import { bindActionCreators } from "redux";
import store from "../store/store";

const hamburgerToggle = (toggle) => ({
  type: TOGGLE,
  toggle,
});
const hamburgerActions = bindActionCreators(
  { toggle: hamburgerToggle },
  store.dispatch
);
export { hamburgerActions };
