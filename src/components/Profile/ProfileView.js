import React from "react";
import styled from "styled-components";

import Gravatar from "../Gravatar";

export const ProfileView = ({ profile }) => (
	<Container>
		<Gravatar email={profile.email} size="100" />
		<Details>
			<Username>{profile.username}</Username>
			<Location>{profile.location}</Location>
			<Bio>{profile.bio}</Bio>
		</Details>
	</Container>
);

const Container = styled.div`
	display: flex;
	margin: 20px 0;
`;

const Details = styled.div`
	flex: 1;
	margin-left: 20px;
`;

const Username = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: #2d3748;
`;

const Location = styled.h5`
	margin: 6px 0px 14px 0px;
	font-size: 14px;
	color: #a0aec0;
`;

const Bio = styled.p`
	font-size: 16px;
	color: #4a5568;
`;
