import React from "react";
import styled from "styled-components";

import { ButtonRegular, ButtonLink } from "../../Common";

export const Menu = () => (
  <Container>
    <ButtonLink path="/project" icon={["far", "angle-left"]} theme="primary">
      Back
    </ButtonLink>
    <ButtonRegular icon={["far", "plus"]} theme="primary">
      Apply
    </ButtonRegular>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;
