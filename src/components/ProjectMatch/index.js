import React from "react";
import { connect } from "react-redux";

const ProjectMatch = ({ user, stack }) => {
	let matchCount = 0;

	user.stack.forEach(US => {
		stack.forEach(PS => {
			if (US === PS) {
				matchCount++;
			}
		});
	});

	const matchPercent = (matchCount / stack.length) * 100;

	return <h1>{matchPercent}%</h1>;
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(ProjectMatch);
