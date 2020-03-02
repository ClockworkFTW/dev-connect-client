import React from "react";

import Gravatar from "../Gravatar";
import * as Styled from "./ProfileStyles";

export const ProfileView = ({ user }) => (
	<Styled.ProfileContainer>
		<Gravatar email={user.email} size="50" />
		<Styled.ProfileMetadata>
			<h1>{user.username}</h1>
			<h3>location: {user.location}</h3>
			<p>{user.bio}</p>
		</Styled.ProfileMetadata>
	</Styled.ProfileContainer>
);
