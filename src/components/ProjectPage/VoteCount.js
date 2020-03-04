import React from "react";
import styled from "styled-components";

export const VoteCount = ({ votes }) => {
	const voteCount = () => {
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

	return <Count>{voteCount()}</Count>;
};

const Count = styled.h3`
	margin: 10px 0;
`;
