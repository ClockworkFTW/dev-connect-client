import styled from "styled-components";

export const StackItem = styled.div`
	display: inline-block;
	border: ${props => `2px solid ${props.active ? "blue" : "white"}`};
	border-radius: 4px;
`;

export const StackIcon = styled.img`
	width: 50px;
	height: 50px;
`;
