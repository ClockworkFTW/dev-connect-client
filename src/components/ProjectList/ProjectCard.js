import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { ProjectVote } from "../ProjectPage";
import ProjectMatch from "../ProjectMatch";
import Gravatar from "../Gravatar";
import Stack from "../Stack";

export const ProjectCard = ({ project }) => (
	<Container>
		<ProjectVote projectId={project._id} votes={project.votes} />
		<div>
			<Name>{project.name}</Name>
			<Created>{moment(project.created).format("MMM D, YYYY")}</Created>
			<Description>{project.description}</Description>
			<Gravatar email={project.manager.email} size="30" />
			<Status>Status</Status>
			<Difficulty>{project.difficulty}</Difficulty>
			<ProjectMatch stack={project.stack} />
			<Stack stack={project.stack} size="30" />
			<Button>
				<Link to={`/project/${project._id}`}>view project</Link>
			</Button>
		</div>
	</Container>
);

const Container = styled.div`
	display: flex;
	margin: 20px 0;
	padding: 20px;
	border-radius: 4px;
	background: #ffffff;
`;

const Name = styled.h1`
	text-decoration: none;
	font-size: 24px;
	font-weight: 700;
	color: #2d3748;
`;

const Created = styled.h5`
	margin-top: 6px;
	font-size: 14px;
	color: #a0aec0;
`;

const Description = styled.p``;

const Status = styled.h3``;

const Difficulty = styled.h3``;

const Button = styled.button``;
