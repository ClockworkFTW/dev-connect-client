import projectServices from "../services/project";

const PROJECT_API_PENDING = "PROJECT_API_PENDING";
const PROJECT_API_SUCCESS = "PROJECT_API_SUCCESS";
const PROJECT_API_FAILURE = "PROJECT_API_FAILURE";

const projectApiPending = () => ({
	type: PROJECT_API_PENDING
});

const projectApiSuccess = data => ({
	type: PROJECT_API_SUCCESS,
	data
});

const projectApiFailure = error => ({
	type: PROJECT_API_FAILURE,
	error
});

export const fetchProjects = () => async dispatch => {
	dispatch(projectApiPending);
	try {
		const projects = await projectServices.fetch();
		dispatch(projectApiSuccess(projects));
	} catch (error) {
		dispatch(projectApiFailure(error));
	}
};

export const createProject = project => async dispatch => {
	dispatch(projectApiPending);
	try {
		const newProject = await projectServices.create(project);
		dispatch(projectApiSuccess(newProject));
	} catch (error) {
		dispatch(projectApiFailure(error));
	}
};

const INITIAL_STATE = { pending: false, data: [], error: null };

const projectReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PROJECT_API_PENDING:
			return { ...state, pending: true };
		case PROJECT_API_SUCCESS:
			return { ...state, data: action.data, pending: false };
		case PROJECT_API_FAILURE:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export default projectReducer;
