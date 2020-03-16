import React from "react";
import styled from "styled-components";

export const ProjectDifficulty = ({ difficulty }) => {
  const setTheme = () => {
    let theme = {};
    switch (difficulty) {
      case "beginner":
        theme.color = "#2F855A";
        theme.background = "#C6F6D5";
        break;
      case "intermediate":
        theme.color = "#B7791F";
        theme.background = "#FEFCBF";
        break;
      case "advanced":
        theme.color = "#C53030";
        theme.background = "#FED7D7";
        break;
      default:
        break;
    }
    return theme;
  };
  return <Container theme={setTheme()}>{difficulty}</Container>;
};

const Container = styled.div`
  display: inline-block;
  padding: 6px 12px;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50px;
`;
