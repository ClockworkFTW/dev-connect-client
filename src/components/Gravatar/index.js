import React from "react";
import gravatar from "gravatar";
import styled from "styled-components";

const Gravatar = ({ email, size }) => {
	const url = gravatar.url(email, { s: size, r: "pg", d: "retro" });
	return <StyledImage src={url} alt="gravatar" />;
};

const StyledImage = styled.img`
	border-radius: 50%;
`;

export default Gravatar;
