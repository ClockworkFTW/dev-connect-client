import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { userSignOut } from "../../reducers/user";

import { PageContainer } from "../Common";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderLinks } from "./HeaderLinks";

const Header = ({ user, userSignOut }) => (
	<Wrapper>
		<PageContainer>
			<Container>
				<HeaderLogo user={user} />
				<HeaderLinks user={user} userSignOut={userSignOut} />
			</Container>
		</PageContainer>
	</Wrapper>
);

const Wrapper = styled.div`
	padding: 12px 20px;
	background: #ffffff;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignOut })(Header);
