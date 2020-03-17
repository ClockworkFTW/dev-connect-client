import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { userSignOut } from "../../reducers/user";

import { ButtonLink, ButtonRegular } from "../Common";

const Sidebar = ({ user, userSignOut }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <h1>profile</h1>
      <ul>
        <Link active={pathname.includes("/project")}>
          <ButtonLink
            path="/project"
            icon={["far", "list-alt"]}
            size="18px"
            theme="basic"
          >
            Feed
          </ButtonLink>
        </Link>
        <Link active={pathname.includes("/team")}>
          <ButtonLink
            path="/team"
            icon={["far", "users-crown"]}
            size="18px"
            theme="basic"
          >
            Teams
          </ButtonLink>
        </Link>
        <Link active={pathname.includes("/message")}>
          <ButtonLink
            path="/message"
            icon={["far", "envelope"]}
            size="18px"
            theme="basic"
          >
            Messages
          </ButtonLink>
        </Link>
      </ul>
      <Footer>
        <ButtonRegular
          icon={["far", "sign-out"]}
          onClick={userSignOut}
          theme="basic"
        >
          Sign Out
        </ButtonRegular>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  flex: 0 0 300px;
  height: 100vh;
  background: #2d3748;
`;

const Link = styled.li`
  padding: 6px 20px;
  background: ${props => (props.active ? "#4A5568" : "#2D3748")};
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignOut })(Sidebar);
