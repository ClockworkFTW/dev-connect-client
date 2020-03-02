import React from "react";

import Gravatar from "../Gravatar";
import Stack from "../Stack";

import * as Styled from "./Profile.styles";

export const ProfileEdit = ({
	handleSubmit,
	user,
	location,
	setLocation,
	bio,
	setBio,
	stack,
	setStack,
	setEdit
}) => (
	<Styled.Container>
		<form onSubmit={handleSubmit}>
			<div>
				<Gravatar email={user.email} size="100" />
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
				<button type="button" onClick={() => setEdit(false)}>
					discard changes
				</button>
			</div>
			<Stack edit={true} value={stack} setValue={setStack} />
			<button type="submit">update</button>
		</form>
	</Styled.Container>
);
