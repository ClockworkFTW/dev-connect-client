const SET_PROJECT_SORT = "SET_PROJECT_SORT";

export const setProjectSort = sort => ({
	type: SET_PROJECT_SORT,
	sort
});

const projectSortReducer = (state = "new", action) => {
	switch (action.type) {
		case SET_PROJECT_SORT:
			return action.sort;
		default:
			return state;
	}
};

export default projectSortReducer;
