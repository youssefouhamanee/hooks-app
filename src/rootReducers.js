import { combineReducers } from "redux";
import personReducer from "./redux/reducer";
import nameReducer from "./redux/reducer/NamePerson";
const rootReducer = combineReducers({ personReducer, nameReducer });

export default rootReducer;
