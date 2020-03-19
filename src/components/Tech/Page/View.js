import React from "react";
import styled from "styled-components";

import { ButtonLink } from "../../Common";
import { Tags } from "./Tags";

export const View = ({ tech }) => (
  <Container>
    <Icon src={tech.icon} alt={tech.name} />
    <Details>
      <Name>{tech.name}</Name>
      <Description>{tech.description}</Description>
      <Tags tags={tech.tags} />
      <ButtonLink href={tech.link} icon={["far", "link"]}>
        link
      </ButtonLink>
    </Details>
  </Container>
);

const Container = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Details = styled.div`
  margin-left: 20px;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
`;

const Description = styled.p`
  margin: 6px 0px 14px 0px;
  line-height: 20px;
  color: #4a5568;
`;
