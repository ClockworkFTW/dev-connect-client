import projectServices from "../services/project";

const PROJECT_API_PENDING = "PROJECT_API_PENDING";
const PROJECT_API_SUCCESS = "PROJECT_API_SUCCESS";
const PROJECT_API_FAILURE = "PROJECT_API_FAILURE";

const projectApiPending = () => ({
	type: PROJECT_API_PENDING
});

const projectApiSuccess = (data, method) => ({
	type: PROJECT_API_SUCCESS,
	project: { data, method }
});

const projectApiFailure = error => ({
	type: PROJECT_API_FAILURE,
	error
});

export const fetchProjects = () => async dispatch => {
	dispatch(projectApiPending);
	try {
		const projects = await projectServices.fetch();
		dispatch(projectApiSuccess(projects, "read"));
	} catch (error) {
		dispatch(projectApiFailure(error));
	}
};

export const createProject = project => async dispatch => {
	dispatch(projectApiPending);
	try {
		const newProject = await projectServices.create(project);
		dispatch(projectApiSuccess(newProject, "create"));
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
			return {
				...state,
				data: updateData(state.data, action),
				pending: false
			};
		case PROJECT_API_FAILURE:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

const updateData = (oldData, action) => {
	const { data, method } = action.project;
	let newData;
	switch (method) {
		case "read":
			newData = data;
			break;
		case "create":
			newData = [...oldData, data];
			break;
		default:
			newData = oldData;
			break;
	}
	return newData;
};

export default projectReducer;
