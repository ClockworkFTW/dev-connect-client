import axios from "axios";

import { setAuth } from "../util";

const baseURL = "http://localhost:3001/api/stack";

const fetch = async () => {
	const result = await axios.get(baseURL, setAuth());
	return result.data;
};

export default { fetch };
