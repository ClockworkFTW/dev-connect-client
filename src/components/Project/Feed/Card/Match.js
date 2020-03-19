import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Match = ({ user, userStack, projectStack }) => {
  let matchStack = userStack || user.stack;

  let matchCount = 0;

  matchStack.forEach(userTech => {
    projectStack.forEach(projectTech => {
      if (userTech === projectTech) {
        matchCount++;
      }
    });
  });

  const matchPercent = Math.round((matchCount / projectStack.length) * 100);

  return (
    <Container>
      <Bar width={matchPercent} />
      <Text>{matchPercent}%</Text>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 80px;
  text-align: center;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  width: ${props => `${props.width}%`};
  height: 100%;
  background: #7f9cf5;
`;

const Text = styled.h3`
  position: relative;
  line-height: 26px;
  font-weight: 700;
  font-size: 14px;
  color: #434190;
`;

export default connect(state => ({ user: state.user.data }))(Match);
