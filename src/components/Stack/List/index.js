import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { SectionHeader } from "../../Common";
import { Tech } from "./Tech";

export const List = ({ allowEdit, stack, stackList, setEdit }) => (
  <Wrapper>
    <SectionHeader>Stack</SectionHeader>
    <Container>
      {stack.length === 0 && !allowEdit ? (
        <h1>This user has not added any technologies to their stack</h1>
      ) : (
        stackList.map(tech =>
          stack.includes(tech._id) ? <Tech key={tech._id} tech={tech} /> : null
        )
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
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
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
  outline: none;
  border: none;
  border-radius: 4px;
  background: #e2e8f0;
  color: #718096;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)``;
