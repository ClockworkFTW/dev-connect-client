import React from "react";
import styled from "styled-components";

export const Search = ({ value, setValue }) => (
  <Input
    type="text"
    placeholder="Search..."
    value={value}
    onChange={e => setValue(e.target.value)}
  />
);

const Input = styled.input`
  flex: 1;
  margin: 0 20px;
  padding: 4px 12px;
  background: #edf2f8;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  color: #2d3748;
  &::placeholder {
    font-family: inherit;
    color: #a0aec0;
  }
`;
