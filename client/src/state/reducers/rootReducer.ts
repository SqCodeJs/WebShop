import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { flagsReducer } from "./flagsReducer";
import { accountReducer } from "./accountReducer";
import { messageReducer } from "./messageReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    account: accountReducer,
    message: messageReducer,
    flags: flagsReducer,
    basket: basketReducer,
});

export default rootReducer;
