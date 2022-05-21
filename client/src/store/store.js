import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
export default store;
