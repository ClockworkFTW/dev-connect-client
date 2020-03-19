import React from "react";
import styled from "styled-components";

import { SectionHeader, ButtonRegular } from "../../Common";
import Stack from "../../Stack";

export const View = ({ project, setProject, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <SectionHeader>Details</SectionHeader>
        <Input
          type="text"
          placeholder="Name"
          value={project.name}
          onChange={e => setProject({ ...project, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Description"
          value={project.description}
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Difficulty"
          value={project.difficulty}
          onChange={e => setProject({ ...project, difficulty: e.target.value })}
        />
      </Container>
      <Stack
        allowEdit={true}
        stack={project.stack}
        setStack={stack => setProject({ ...project, stack })}
      />
      <ButtonRegular type="submit" icon={["far", "plus"]} theme="primary">
        create
      </ButtonRegular>
    </form>
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  background: #edf2f8;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  color: #2d3748;
`;
