const SET_PROJECT_SEARCH = "SET_PROJECT_SEARCH";

export const setProjectSearch = search => ({
	type: SET_PROJECT_SEARCH,
	search
});

const projectSearchReducer = (state = "", action) => {
	switch (action.type) {
		case SET_PROJECT_SEARCH:
			return action.search;
		default:
			return state;
	}
};

export default projectSearchReducer;
