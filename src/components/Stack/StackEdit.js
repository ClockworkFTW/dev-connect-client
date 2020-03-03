import React from "react";
import styled from "styled-components";

import * as Styled from "./StackStyles";

export const StackEdit = ({ stackList, value, handleSelect }) => (
	<Container>
		{stackList.map(stackItem => (
			<Styled.StackItem
				key={stackItem._id}
				active={value.includes(stackItem._id)}
				onClick={() => handleSelect(stackItem._id)}
			>
				<Styled.StackIcon src={stackItem.icon} alt={stackItem.name} />
			</Styled.StackItem>
		))}
	</Container>
);

const Container = styled.div`
	margin: 20px 0;
`;
