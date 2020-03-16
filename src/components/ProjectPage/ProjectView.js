import React from "react";
import styled from "styled-components";

import { ProjectDifficulty } from "../ProjectList/ProjectDifficulty";
import { ProfileChip } from "../ProjectList/ProfileChip";
import ProjectVote from "../ProjectVote";
import Stack from "../Stack";

export const ProjectView = ({ project }) => (
  <Container>
    <Header>
      <ProjectVote projectId={project._id} votes={project.votes} />
      <Details>
        <ProjectDifficulty difficulty={project.difficulty} />
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
        <ProfileChip user={project.manager} />
      </Details>
    </Header>
    <Stack stack={project.stack} size="50" />
  </Container>
);

const Container = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Header = styled.div`
  display: flex;
`;

const Details = styled.div`
  margin-left: 20px;
`;

const Name = styled.h1`
  margin: 12px 0px;
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
`;

const Description = styled.p`
  margin: 12px 0 26px 0;
  font-size: 16px;
  color: #4a5568;
`;
