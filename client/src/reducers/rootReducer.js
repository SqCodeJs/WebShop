import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { dbReducer } from "./dbReducer";
import { flagsReducer } from "./flagsReducer";
import { accountReducer } from "./accountReducer";
import { messageReducer } from "./messageReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
  names: appReducer,
  db: dbReducer,
  account: accountReducer,
  message: messageReducer,
  flags: flagsReducer,
  basket: basketReducer,
});
export default rootReducer;
