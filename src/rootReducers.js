import { combineReducers } from "redux";
import personReducer from "./redux/reducer";
const rootReducer = combineReducers({ personReducer });

export default rootReducer;
