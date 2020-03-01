import React from "react";

import * as Styled from "./Profile.styles";
import Gravatar from "../Gravatar";

export const ProfileComponent = ({ user }) => (
	<Styled.Container>
		<h1>{user.username}</h1>
		<Gravatar email={user.email} size="100" />
	</Styled.Container>
);
