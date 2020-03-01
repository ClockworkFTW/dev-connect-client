import { combineReducers } from "redux";

import userReducer from "./user";
import projectReducer from "./project";
import stackReducer from "./stack";

const rootReducer = combineReducers({
	user: userReducer,
	projects: projectReducer,
	stacks: stackReducer
});

export default rootReducer;
