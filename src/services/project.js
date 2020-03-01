import axios from "axios";

import { setAuth } from "../util";

const baseURL = "http://localhost:3001/api/project";

const fetch = async () => {
	const result = await axios.get(baseURL, setAuth());
	return result.data;
};

const create = async project => {
	const result = await axios.post(baseURL, project, setAuth());
	return result.data;
};

export default { fetch, create };
