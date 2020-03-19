import React from "react";
import styled from "styled-components";

import { ButtonLink } from "../Common";

export const TeamList = ({ user, projects, path }) => {
  const userProjects = projects.filter(
    project => project.manager.id === user.id
  );

  return (
    <ul>
      {userProjects.map(project => (
        <Link active={path === `/team/${project._id}`}>
          <ButtonLink path={`/team/${project._id}`}>{project.name}</ButtonLink>
        </Link>
      ))}
    </ul>
  );
};

const Link = styled.li`
  padding: 6px 20px 6px 40px;
  background: ${props => (props.active ? "#4A5568" : "#1A202C")};
  &:hover {
    background: #4a5568;
  }
`;
