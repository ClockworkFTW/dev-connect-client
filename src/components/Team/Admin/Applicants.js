import React from "react";
import styled from "styled-components";

import { SectionHeader, ButtonRegular } from "../../Common";
import { Chip } from "../../Profile/Page/Chip";
import Match from "../../Project/Feed/Card/Match";

export const Applicants = ({ project, accept, reject }) => (
  <Container>
    <SectionHeader>Applicants</SectionHeader>
    {project.applicants.length === 0 ? (
      <h1>No applicants</h1>
    ) : (
      <ul>
        {project.applicants.map(applicant => (
          <Applicant>
            <Chip user={applicant} />
            <Match userStack={applicant.stack} projectStack={project.stack} />
            <div>
              <ButtonRegular onClick={() => accept(applicant.id)}>
                Add
              </ButtonRegular>
              <ButtonRegular onClick={() => reject(applicant.id)}>
                Reject
              </ButtonRegular>
            </div>
          </Applicant>
        ))}
      </ul>
    )}
  </Container>
);

const Container = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Applicant = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
