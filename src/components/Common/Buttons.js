import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const ButtonLink = ({ path, href, icon, children, size, theme }) =>
  path ? (
    <RouterLink to={path}>
      <Button type="buton" size={size} theme={theme}>
        {icon && <Icon icon={icon} text={children} />}
        {children && <Text>{children}</Text>}
      </Button>
    </RouterLink>
  ) : (
    <AnchorLink href={href}>
      <Button type="buton" size={size} theme={theme}>
        {icon && <Icon icon={icon} text={children} />}
        {children && <Text>{children}</Text>}
      </Button>
    </AnchorLink>
  );

const ButtonRegular = ({ type, onClick, icon, children, size, theme }) => (
  <Button type={type || "buton"} onClick={onClick} size={size} theme={theme}>
    {icon && <Icon icon={icon} text={children} />}
    {children && <Text>{children}</Text>}
  </Button>
);

const basic = css`
  border: none;
  background: none;
  color: #667eea;
`;

const primary = css`
  border: none;
  background: #667eea;
  color: #ffffff;
`;

const outline = css`
  border: 1px solid #667eea;
  background: none;
  color: #667eea;
`;

const selectTheme = theme => {
  switch (theme) {
    case "primary":
      return primary;
    case "outline":
      return outline;
    default:
      return basic;
  }
};

const Button = styled.button`
  ${props => selectTheme(props.theme)}
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  font-family: inherit;
  font-size: ${props => props.size || "14px"};
  &:hover {
    cursor: pointer;
  }
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${props => (props.text ? "6px" : "none")};
`;

const Text = styled.span``;

export { ButtonRegular, ButtonLink };
