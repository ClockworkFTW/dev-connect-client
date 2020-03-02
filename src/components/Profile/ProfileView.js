import React from "react";

import Gravatar from "../Gravatar";
import Stack from "../Stack";

import * as Styled from "./Profile.styles";

export const ProfileView = ({ user, setEdit }) => (
	<Styled.Container>
		<div>
			<Gravatar email={user.email} size="100" />
			<h1>{user.username}</h1>
			<h3>location: {user.location}</h3>
			<p>{user.bio}</p>
			<button type="button" onClick={() => setEdit(true)}>
				edit profle
			</button>
		</div>
		<Stack edit={false} stack={user.stack} />
	</Styled.Container>
);
