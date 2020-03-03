import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import Gravatar from "../Gravatar";

export const HeaderLinks = ({ user, userSignOut }) =>
	user ? (
		<Container>
			<Link to={`/profile/${user.id}`}>
				<Gravatar email={user.email} size="30" />
			</Link>
			<button onClick={userSignOut}>sign out</button>
		</Container>
	) : (
		<Container>
			<Link to="/sign-in">sign in</Link>
		</Container>
	);

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Link = styled(RouterLink)`
	text-decoration: none;
`;
