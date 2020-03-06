import { combineReducers } from "redux";

import userReducer from "./user";
import projectReducer from "./project";
import projectSearchReducer from "./project-search";
import projectSortReducer from "./project-sort";
import stackReducer from "./stack";

const rootReducer = combineReducers({
	user: userReducer,
	projects: projectReducer,
	projectSearch: projectSearchReducer,
	projectSort: projectSortReducer,
	stacks: stackReducer
});

export default rootReducer;
