import axios from "axios";

import { setAuth } from "../util";

const baseURL = "http://localhost:3001/api/user";

const signUp = async credentials => {
	const result = await axios.post(`${baseURL}/sign-up`, credentials);
	return result.data;
};

const signIn = async credentials => {
	const result = await axios.post(`${baseURL}/sign-in`, credentials);
	return result.data;
};

const edit = async edit => {
	const result = await axios.put(baseURL, edit, setAuth());
	return result.data;
};

export default { signUp, signIn, edit };
