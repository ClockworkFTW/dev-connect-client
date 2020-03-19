import React from "react";
import styled from "styled-components";

import { Chip } from "../Profile/Page/Chip";

export const Profile = ({ user }) => (
  <Container>
    <Chip user={user} />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #4a5568;
`;
