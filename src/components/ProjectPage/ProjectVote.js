import React from "react";
import { connect } from "react-redux";
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

	return (
		<Container>
			<Button
				type="submit"
				disabled={hasVoted ? hasVoted.up : false}
				onClick={() => handleVote(true)}
			>
				+
			</Button>
			<Count>{voteCount(votes)}</Count>
			<Button
				type="submit"
				disabled={hasVoted ? !hasVoted.up : false}
				onClick={() => handleVote(false)}
			>
				-
			</Button>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
`;

const Count = styled.span`
	margin: 8px 0;
`;

const Button = styled.button``;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { updateProject })(ProjectVote);
