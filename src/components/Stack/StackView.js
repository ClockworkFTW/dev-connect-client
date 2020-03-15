import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StackView = ({ stack, stackList, size }) => (
  <Container>
    {stackList.map(stackItem =>
      stack.includes(stackItem._id) ? (
        <StackItem key={stackItem._id} to={`/tech/${stackItem._id}`}>
          <StackIcon src={stackItem.icon} alt={stackItem.name} size={size} />
        </StackItem>
      ) : null
    )}
  </Container>
);

const Container = styled.div`
  margin: 20px 0;
`;

const StackItem = styled(Link)`
  display: inline-block;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const StackIcon = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;
