import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../Common";

export const StackEdit = ({ stackList, value, handleSelect }) => (
	<Container>
		<SectionHeader>Stack List</SectionHeader>
		{stackList.map(stackItem => (
			<StackItem
				key={stackItem._id}
				active={value.includes(stackItem._id)}
				onClick={() => handleSelect(stackItem._id)}
			>
				<StackIcon src={stackItem.icon} alt={stackItem.name} />
			</StackItem>
		))}
	</Container>
);

const Container = styled.div`
	margin: 20px 0;
`;

const StackItem = styled.div`
	opacity: ${props => (props.active ? 1 : 0.5)};
	margin: 5px;
	display: inline-block;
	&:hover {
		cursor: pointer;
		opacity: 1;
	}
`;

const StackIcon = styled.img`
	width: 50px;
	height: 50px;
`;
