import React from "react";

import Gravatar from "../Gravatar";
import * as Styled from "./ProfileStyles";

export const ProfileView = ({ profile }) => (
	<Styled.ProfileContainer>
		<Gravatar email={profile.email} size="50" />
		<Styled.ProfileMetadata>
			<h1>{profile.username}</h1>
			<h3>location: {profile.location}</h3>
			<p>{profile.bio}</p>
		</Styled.ProfileMetadata>
	</Styled.ProfileContainer>
);
