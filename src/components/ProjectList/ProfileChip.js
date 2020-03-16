import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Gravatar from "../Gravatar";

export const ProfileChip = ({ user }) => (
  <Container to={`/profile/${user._id}`}>
    <Gravatar email={user.email} size="30" />
    <Username>{user.username}</Username>
  </Container>
);

const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4a5568;
  &:hover {
    color: #667eea;
  }
`;

const Username = styled.h3`
  margin-left: 12px;
`;
