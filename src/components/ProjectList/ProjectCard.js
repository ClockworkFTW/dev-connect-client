import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import ProjectVote from "../ProjectVote";
import ProjectMatch from "../ProjectMatch";
import Gravatar from "../Gravatar";
import Stack from "../Stack";

export const ProjectCard = ({ project }) => (
	<Container>
		<ProjectVote projectId={project._id} votes={project.votes} />
		<ProjectDetails>
			<Name to={`/project/${project._id}`}>{project.name}</Name>
			<Created>
				<Icon icon={["far", "calendar"]} />
				{moment(project.created).format("MMM D, YYYY")}
			</Created>
			<Description>{project.description}</Description>
			<Gravatar email={project.manager.email} size="30" />
			<Status>Status</Status>
			<Difficulty>{project.difficulty}</Difficulty>
			<ProjectMatch stack={project.stack} />
			<Stack stack={project.stack} size="30" />
		</ProjectDetails>
	</Container>
);

const Container = styled.div`
	display: flex;
	margin: 20px 0;
	padding: 20px;
	border-radius: 4px;
	background: #ffffff;
`;

const ProjectDetails = styled.div`
	margin-left: 20px;
`;

const Name = styled(Link)`
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

const Icon = styled(FontAwesomeIcon)`
	margin-right: 4px;
`;

const Description = styled.p``;

const Status = styled.h3``;

const Difficulty = styled.h3``;

const Button = styled.button``;
