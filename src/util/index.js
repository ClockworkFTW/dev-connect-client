export const setAuth = () => {
	const token = localStorage.getItem("token");

	const config = { headers: { Authorization: `Bearer ${token}` } };

	return token ? config : null;
};

export const matchPercent = (userStack, projectStack) => {
	let matchCount = 0;

	userStack.forEach(US => {
		projectStack.forEach(PS => {
			if (US === PS) {
				matchCount++;
			}
		});
	});

	return Math.round((matchCount / projectStack.length) * 100);
};

export const voteCount = votes => {
	let count = 0;
	votes.forEach(vote => {
		if (vote.up) {
			count++;
		} else {
			count--;
		}
	});
	return votes.length === 0 ? 0 : count;
};
