import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderLogo = ({ user }) =>
	user ? (
		<Link to="/project">Dev Connect</Link>
	) : (
		<Link to="/">Dev Connect</Link>
	);

const Link = styled(RouterLink)`
	font-size: 20px;
	text-decoration: none;
	color: #000000;
`;
