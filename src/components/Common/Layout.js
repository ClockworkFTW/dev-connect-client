import React from "react";
import styled from "styled-components";

import Sidebar from "../Sidebar";

export const Layout = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>
      <Header>
        <Container>{children[0]}</Container>
      </Header>
      <Content>
        <Container>{children[1]}</Container>
      </Content>
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
`;

const Header = styled.div`
  height: 60px;
  padding: 0 20px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
`;

const Content = styled.div`
  height: calc(100vh - 60px);
  padding: 20px 0;
  overflow: scroll;
`;

const Container = styled.div`
  position: relative;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
