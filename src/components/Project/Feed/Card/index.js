import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Vote from "./Vote";
import Match from "./Match";
import { Created } from "./Created";
import { Chip } from "../../../Profile/Chip";
import { Difficulty } from "./Difficulty";

export const Card = ({ project }) => (
  <Container>
    <Vote projectId={project._id} votes={project.votes} />
    <Details>
      <Banner>
        <Difficulty difficulty={project.difficulty} />
        <Created create={project.created} />
      </Banner>
      <Name to={`/project/${project._id}`}>{project.name}</Name>
      <Description>{project.description}</Description>
      <Banner>
        <Chip user={project.manager} />
        <Match stack={project.stack} />
      </Banner>
    </Details>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Details = styled.div`
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
