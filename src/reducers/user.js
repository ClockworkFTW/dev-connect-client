import jwt from "jsonwebtoken";
import userServices from "../services/user";

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

const USER_INIT = "USER_INIT";
const USER_API_PENDING = "USER_API_PENDING";
const USER_API_SUCCESS = "USER_API_SUCCESS";
const USER_API_FAILURE = "USER_API_FAILURE";
const USER_SIGN_OUT = "USER_SIGN_OUT";

export const userInit = () => ({
	type: USER_INIT
});

const userApiPending = () => ({
	type: USER_API_PENDING
});

const userApiSuccess = data => ({
	type: USER_API_SUCCESS,
	data
});

const userApiFailure = error => ({
	type: USER_API_FAILURE,
	error
});

export const userSignUp = credentials => async dispatch => {
	dispatch(userApiPending);
	try {
		const token = await userServices.signUp(credentials);
		localStorage.setItem("token", token);
		const user = jwt.decode(token, JWT_SECRET);
		dispatch(userApiSuccess(user));
	} catch (error) {
		dispatch(userApiFailure(error));
	}
};

export const userSignIn = credentials => async dispatch => {
	dispatch(userApiPending);
	try {
		const token = await userServices.signIn(credentials);
		localStorage.setItem("token", token);
		const user = jwt.decode(token, JWT_SECRET);
		dispatch(userApiSuccess(user));
	} catch (error) {
		dispatch(userApiFailure(error));
	}
};

export const editUser = edit => async dispatch => {
	dispatch(userApiPending);
	try {
		const token = await userServices.edit(edit);
		localStorage.setItem("token", token);
		const user = jwt.decode(token, JWT_SECRET);
		dispatch(userApiSuccess(user));
	} catch (error) {
		dispatch(userApiFailure(error));
	}
};

export const userSignOut = () => ({
	type: USER_SIGN_OUT
});

const INITIAL_STATE = { pending: false, data: null, error: null };

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_INIT:
			const token = localStorage.getItem("token");
			const user = jwt.decode(token, JWT_SECRET);
			return { ...state, data: user };
		case USER_API_PENDING:
			return { ...state, pending: true };
		case USER_API_SUCCESS:
			return { ...state, data: action.data, pending: false };
		case USER_API_FAILURE:
			return { ...state, error: action.error, pending: false };
		case USER_SIGN_OUT:
			localStorage.removeItem("token");
			return { ...state, data: null };
		default:
			return state;
	}
};

export default userReducer;
