import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Gravatar from "../Gravatar";
import ProjectVote from "./ProjectVote";
import Stack from "../Stack";

export const ProjectView = ({ project }) => (
	<Container>
		<Header>
			<ProjectVote projectId={project._id} votes={project.votes} />
			<Details>
				<Link to={`/profile/${project.manager._id}`}>
					<Gravatar email={project.manager.email} size="30" />
					{project.manager.username}
				</Link>
				<Name>{project.name}</Name>
				<Difficulty>{project.difficulty}</Difficulty>
				<Description>{project.description}</Description>
			</Details>
		</Header>
		<Stack stack={project.stack} />
	</Container>
);

const Container = styled.div`
	margin: 20px 0;
`;

const Header = styled.div`
	display: flex;
`;

const Details = styled.div`
	margin-left: 20px;
`;

const Name = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: #2d3748;
`;

const Difficulty = styled.h5`
	margin: 6px 0px 14px 0px;
	font-size: 14px;
	color: #a0aec0;
`;

const Description = styled.p`
	font-size: 16px;
	color: #4a5568;
`;
