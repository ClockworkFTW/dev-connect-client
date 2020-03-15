import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Sort = ({ value, setValue }) => (
  <Container>
    <Button active={value === "new"} onClick={() => setValue("new")}>
      <Icon icon={["far", "fire"]} /> new
    </Button>
    <Button active={value === "popular"} onClick={() => setValue("popular")}>
      <Icon icon={["far", "star"]} /> popular
    </Button>
    <Button active={value === "match"} onClick={() => setValue("match")}>
      <Icon icon={["far", "signal-alt"]} /> match
    </Button>
  </Container>
);

const Container = styled.div``;

const Button = styled.button`
  margin-left: 4px;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  color: ${props => (props.active ? "#667EEA" : "#A0AEC0")};
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
