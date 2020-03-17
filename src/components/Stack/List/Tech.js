import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tech = ({ tech }) => (
  <Container to={`/tech/${tech._id}`}>
    <Icon src={tech.icon} alt={tech.name} />
  </Container>
);

const Container = styled(Link)`
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
