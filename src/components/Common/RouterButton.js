import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RouterButton = ({ path, icon, children }) => (
	<Button type="buton">
		{icon && <Icon icon={icon} />}
		<Link to={path}>{children}</Link>
	</Button>
);

const Button = styled.button`
	padding: 4px 8px;
	border-radius: 4px;
	border: none;
	background: #667eea;
	outline: none;
	color: #ffffff;
	font-family: inherit;
	font-size: 14px;
`;

const Icon = styled(FontAwesomeIcon)`
	margin-right: 6px;
`;

const Link = styled(RouterLink)`
	text-decoration: none;
	color: #ffffff;
`;
