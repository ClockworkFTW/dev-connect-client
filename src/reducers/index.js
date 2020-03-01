import { combineReducers } from "redux";

import userReducer from "./user";
import projectReducer from "./project";

const rootReducer = combineReducers({
	user: userReducer,
	projects: projectReducer
});

export default rootReducer;
