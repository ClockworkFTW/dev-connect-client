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

const fetch = async (id, setProfile) => {
	const result = await axios.get(`${baseURL}/${id}`, setAuth());
	setProfile(result.data);
};

const edit = async edit => {
	const result = await axios.put(baseURL, edit, setAuth());
	return result.data;
};

export default { signUp, signIn, fetch, edit };
