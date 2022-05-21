import { MOUNT } from "./duck/types.js";
import { bindActionCreators } from "redux";
import store from "../store/store";

const mountDB = (db) => ({ type: MOUNT, db });
const dbActions = bindActionCreators({ mount: mountDB }, store.dispatch);

export { dbActions };
