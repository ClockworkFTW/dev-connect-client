import React from "react";
import styled from "styled-components";

import { ButtonRegular, ButtonLink } from "../../Common";

export const Menu = ({ showApply, hasApplied, handleApply }) => (
  <Container>
    <ButtonLink path="/project" icon={["far", "angle-left"]} theme="primary">
      Back
    </ButtonLink>
    {showApply ? (
      <ButtonRegular
        icon={["far", hasApplied ? "minus" : "plus"]}
        onClick={handleApply}
        theme="primary"
      >
        {hasApplied ? "Applied" : "Apply"}
      </ButtonRegular>
    ) : (
      <h1>member</h1>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;
