import React from "react";
import styled from "styled-components";

import { ButtonLink } from "../../Common";

export const Menu = ({ project }) => (
  <Container>
    <h1>Admin: {project.name}</h1>
    <ButtonLink path={`/team/${project._id}`} theme="primary">
      back
    </ButtonLink>
  </Container>
);

const Container = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
