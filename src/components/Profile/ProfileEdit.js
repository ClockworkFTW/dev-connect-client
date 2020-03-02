import React from "react";

import Gravatar from "../Gravatar";
import * as Styled from "./ProfileStyles";

export const ProfileEdit = ({ user, location, setLocation, bio, setBio }) => (
	<Styled.ProfileContainer>
		<Gravatar email={user.email} size="50" />
		<div>
			<h1>{user.username}</h1>
			<input
				type="text"
				placeholder="location"
				value={location}
				onChange={event => setLocation(event.target.value)}
			/>
			<textarea
				placeholder="bio"
				value={bio}
				onChange={event => setBio(event.target.value)}
			/>
		</div>
	</Styled.ProfileContainer>
);
