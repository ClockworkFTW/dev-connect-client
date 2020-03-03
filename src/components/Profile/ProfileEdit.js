import React from "react";

import Gravatar from "../Gravatar";
import * as Styled from "./ProfileStyles";

export const ProfileEdit = ({ profile, setProfile }) => (
	<Styled.ProfileContainer>
		<Gravatar email={profile.email} size="50" />
		<div>
			<h1>{profile.username}</h1>
			<input
				type="text"
				placeholder="location"
				value={profile.location}
				onChange={event =>
					setProfile({ ...profile, location: event.target.value })
				}
			/>
			<textarea
				placeholder="bio"
				value={profile.bio}
				onChange={event =>
					setProfile({ ...profile, bio: event.target.value })
				}
			/>
		</div>
	</Styled.ProfileContainer>
);
