import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ProjectDate = ({ created }) => (
  <Container>
    <Icon icon={["far", "calendar"]} />
    {moment(created).format("MMM D, YYYY")}
  </Container>
);

const Container = styled.h5`
  font-size: 14px;
  color: #a0aec0;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
