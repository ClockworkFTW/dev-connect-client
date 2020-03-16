import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProjectVote from "../ProjectVote";
import ProjectMatch from "../ProjectMatch";
import { ProjectDate } from "./ProjectDate";
import { ProfileChip } from "./ProfileChip";
import { ProjectDifficulty } from "./ProjectDifficulty";

export const ProjectCard = ({ project }) => (
  <Container>
    <ProjectVote projectId={project._id} votes={project.votes} />
    <ProjectDetails>
      <Banner>
        <ProjectDifficulty difficulty={project.difficulty} />
        <ProjectDate create={project.created} />
      </Banner>
      <Name to={`/project/${project._id}`}>{project.name}</Name>
      <Description>{project.description}</Description>
      <Banner>
        <ProfileChip user={project.manager} />
        <ProjectMatch stack={project.stack} />
      </Banner>
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
  flex: 1;
  margin-left: 20px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled(Link)`
  display: block;
  margin: 12px 0px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  &:hover {
    color: #667eea;
  }
`;

const Description = styled.p`
  margin: 12px 0 26px 0;
  color: #4a5568;
`;
