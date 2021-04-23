import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
import { createLogger } from "redux-logger";

const myMiddleware = [thunk, createLogger()];
const store = createStore(rootReducer, applyMiddleware(...myMiddleware));

export default store;
