import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Gravatar from "../Gravatar";

export const Friend = ({ friend }) => (
	<Container>
		<Gravatar email={friend.email} size="30" />
		<Name to={`/profile/${friend._id}`}>{friend.username}</Name>
	</Container>
);

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

export const Name = styled(Link)`
	margin: 0 12px;
	text-decoration: none;
	color: #000000;
`;
