import React from "react";
import styled from "styled-components";

export const Sort = ({ value, setValue }) => (
	<Container>
		<Button active={value === "new"} onClick={() => setValue("new")}>
			new
		</Button>
		<Button
			active={value === "popular"}
			onClick={() => setValue("popular")}
		>
			popular
		</Button>
		<Button active={value === "match"} onClick={() => setValue("match")}>
			match
		</Button>
	</Container>
);

const Container = styled.div``;

const Button = styled.button`
	background: ${props => (props.active ? "blue" : "none")};
	color: ${props => (props.active ? "white" : "black")};
`;
