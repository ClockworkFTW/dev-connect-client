import React from "react";

import * as Styled from "./Profile.styles";

export const ProfileComponent = ({ user }) => (
	<Styled.Container>
		<h1>{user.username}</h1>
	</Styled.Container>
);
