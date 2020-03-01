import axios from "axios";

const baseURL = "http://localhost:3001/api/user";

const signUp = async credentials => {
	const result = await axios.post(`${baseURL}/sign-up`, credentials);
	return result.data;
};

const signIn = async credentials => {
	const result = await axios.post(`${baseURL}/sign-in`, credentials);
	return result.data;
};

export default { signUp, signIn };
