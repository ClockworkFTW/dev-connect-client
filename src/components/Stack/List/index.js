import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { SectionHeader } from "../../Common";
import { Tech } from "./Tech";

export const List = ({ allowEdit, stack, stackList, setEdit }) => (
  <Wrapper>
    <SectionHeader>Stack</SectionHeader>
    <Container>
      {stackList.map(tech =>
        stack.includes(tech._id) ? <Tech key={tech._id} tech={tech} /> : null
      )}
      {allowEdit && (
        <EditButton onClick={() => setEdit(true)}>
          <Icon icon={["far", "plus"]} />
        </EditButton>
      )}
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 0;
  background: #e2e8f0;
`;

const Icon = styled(FontAwesomeIcon)``;
