import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import Gravatar from "../Gravatar";

export const ProjectCard = ({ project }) => (
	<Container to={`/project/${project._id}`}>
		<Name>{project.name}</Name>
		<Created>{moment(project.created).format("MMM D, YYYY")}</Created>
		<Link to={`/profile/${project.manager._id}`}>
			<Gravatar email={project.manager.email} size="30" />
		</Link>
	</Container>
);

const Container = styled(Link)`
	display: block;
	margin: 20px 0;
	padding: 20px;
	text-decoration: none;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Name = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: #2d3748;
`;

const Created = styled.h5`
	margin: 6px 0px 14px 0px;
	font-size: 14px;
	color: #a0aec0;
`;
