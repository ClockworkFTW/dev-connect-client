import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SectionHeader } from "../Common";

export const StackView = ({ stack, stackList }) => (
	<Container>
		<SectionHeader>Stack List</SectionHeader>
		{stackList.map(stackItem =>
			stack.includes(stackItem._id) ? (
				<StackItem key={stackItem._id} to={`/stack/${stackItem._id}`}>
					<StackIcon src={stackItem.icon} alt={stackItem.name} />
				</StackItem>
			) : null
		)}
	</Container>
);

const Container = styled.div`
	margin: 20px 0;
`;

const StackItem = styled(Link)`
	display: inline-block;
	margin: 5px;
	&:hover {
		cursor: pointer;
	}
`;

const StackIcon = styled.img`
	width: 50px;
	height: 50px;
`;
