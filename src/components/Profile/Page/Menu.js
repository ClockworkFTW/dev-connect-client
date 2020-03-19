import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { ButtonRegular } from "../../Common";

export const Menu = () => {
  const { goBack } = useHistory();
  return (
    <Container>
      <ButtonRegular
        icon={["far", "angle-left"]}
        onClick={goBack}
        theme="primary"
      >
        Back
      </ButtonRegular>
    </Container>
  );
};

const Container = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
