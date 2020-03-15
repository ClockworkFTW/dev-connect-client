import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ButtonLink = ({ path, href, icon, children }) =>
  path ? (
    <RouterLink to={path}>
      <Button type="buton">
        {icon && <Icon icon={icon} text={children} />}
        {children && <Text>{children}</Text>}
      </Button>
    </RouterLink>
  ) : (
    <AnchorLink href={href}>
      <Button type="buton">
        {icon && <Icon icon={icon} text={children} />}
        {children && <Text>{children}</Text>}
      </Button>
    </AnchorLink>
  );

const RouterLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const Button = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  background: #667eea;
  outline: none;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${props => (props.text ? "6px" : "none")};
`;

const Text = styled.span``;
