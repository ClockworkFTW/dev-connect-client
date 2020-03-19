import React from "react";
import styled from "styled-components";

export const Menu = ({ search, setSearch }) => (
  <Container>
    <h1>Menu</h1>
    <Input
      type="search"
      placeholder="Search technologies..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input``;
