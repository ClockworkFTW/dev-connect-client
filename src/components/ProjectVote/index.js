import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { updateProject } from "../../reducers/project";
import { voteCount } from "../../util";

const ProjectVote = ({ projectId, votes, user, updateProject }) => {
	const hasVoted = votes.find(vote => vote.user === user.id);

	const handleVote = up => {
		let updatedVotes;
		if (hasVoted) {
			updatedVotes = votes.filter(vote => vote.user !== user.id);
		} else {
			updatedVotes = [...votes, { up, user: user.id }];
		}
		updateProject(projectId, { votes: updatedVotes });
	};

	const disableUp = hasVoted ? hasVoted.up : false;
	const disableDown = hasVoted ? !hasVoted.up : false;

	return (
		<Container>
			<Button
				type="submit"
				disabled={disableUp}
				onClick={() => handleVote(true)}
			>
				<FontAwesomeIcon
					icon={[disableUp ? "fas" : "far", "chevron-circle-up"]}
				/>
			</Button>
			<Count>{voteCount(votes)}</Count>
			<Button
				type="submit"
				disabled={disableDown}
				onClick={() => handleVote(false)}
			>
				<FontAwesomeIcon
					icon={[disableDown ? "fas" : "far", "chevron-circle-down"]}
				/>
			</Button>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
`;

const Count = styled.h3`
	margin: 8px 0;
`;

const Button = styled.button`
	margin: 0;
	padding: 4px;
	border: none;
	background: none;
	outline: none;
	font-size: 16px;
	color: ${props => (props.disabled ? "#667eea" : "#a0aec0")};
	&:hover {
		cursor: pointer;
		color: #667eea;
	}
`;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { updateProject })(ProjectVote);
