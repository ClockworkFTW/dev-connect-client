import React from "react";
import styled from "styled-components";

export const StackEdit = ({ stackList, value, handleSelect, size }) => (
	<Container>
		{stackList.map(stackItem => (
			<StackItem
				key={stackItem._id}
				active={value.includes(stackItem._id)}
				onClick={() => handleSelect(stackItem._id)}
			>
				<StackIcon
					src={stackItem.icon}
					alt={stackItem.name}
					size={size}
				/>
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
	width: ${props => `${props.size}px`};
	height: ${props => `${props.size}px`};
`;
