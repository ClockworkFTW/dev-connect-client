import React from "react";
import styled from "styled-components";

export const Tech = ({ tech, stack, handleSelect }) => (
  <Container
    key={tech._id}
    active={stack.includes(tech._id)}
    onClick={() => handleSelect(tech._id)}
  >
    <Icon src={tech.icon} alt={tech.name} />
  </Container>
);

const Container = styled.div`
  display: inline-block;
  margin: 5px;
  opacity: ${props => (props.active ? "1" : "0.5")};
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
