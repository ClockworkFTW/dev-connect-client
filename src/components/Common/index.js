import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
	background: #EDF2F7;
}
  body {
    font-family: 'Roboto';
  }
`;

export const PageContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const SectionHeader = styled.h3`
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: 700;
	color: #2d3748;
`;
