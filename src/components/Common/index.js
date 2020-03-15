import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";

import { ButtonLink } from "./ButtonLink";

library.add(fas, far);

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
  padding: 0 20px;
`;

export const SectionHeader = styled.h3`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
`;

export { ButtonLink };
