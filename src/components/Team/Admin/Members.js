import React from "react";
import styled from "styled-components";

import { SectionHeader, ButtonRegular } from "../../Common";
import { Chip } from "../../Profile/Page/Chip";
import Match from "../../Project/Feed/Card/Match";

export const Members = ({ project, remove }) => (
  <Container>
    <SectionHeader>Members</SectionHeader>
    {project.team.length === 0 ? (
      <h1>No members</h1>
    ) : (
      <ul>
        {project.team.map(member => (
          <Member>
            <Chip user={member} />
            <Match userStack={member.stack} projectStack={project.stack} />
            <ButtonRegular onClick={() => remove(member.id)}>
              remove
            </ButtonRegular>
          </Member>
        ))}
      </ul>
    )}
  </Container>
);

const Container = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Member = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
