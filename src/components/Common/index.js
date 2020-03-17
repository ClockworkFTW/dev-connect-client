import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";

import PrivateRoute from "./PrivateRoute";
import { Layout } from "./Layout";
import { ButtonRegular, ButtonLink } from "./Buttons";

library.add(fas, far);

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto';
    background: #EDF2F7;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export const SectionHeader = styled.h3`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
`;

export { PrivateRoute, Layout, ButtonRegular, ButtonLink };
