import React from "react";
import styled from "styled-components";

export const Tags = ({ tags }) => (
  <Container>
    {tags.map((tag, i) => (
      <Tag key={i}>{tag}</Tag>
    ))}
  </Container>
);

const Container = styled.div`
  margin: 16px 0;
`;

const Tag = styled.div`
  display: inline-block;
  margin-right: 8px;
  padding: 4px 12px;
  border: 1px solid #718096;
  border-radius: 2px;
  font-size: 14px;
  color: #718096;
`;
