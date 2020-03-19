import React from "react";
import gravatar from "gravatar";
import styled from "styled-components";

export const Gravatar = ({ email, size }) => {
  const url = gravatar.url(email, { s: size * 2, r: "pg", d: "retro" });
  return <Avatar size={size} src={url} alt="gravatar" />;
};

const Avatar = styled.img`
  flex: ${props => `0 0 ${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 2px;
`;
