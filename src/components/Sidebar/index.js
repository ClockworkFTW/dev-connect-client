import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { userSignOut } from "../../reducers/user";

import { ButtonLink, ButtonRegular } from "../Common";
import { Profile } from "./Profile";
import { TeamList } from "./Teams";

const Sidebar = ({ user, userSignOut, projects }) => {
  const { pathname } = useLocation();
  const [toggleTeams, setToggleTeams] = useState(true);
  return (
    <Container>
      <Profile user={user} />
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
          <ButtonRegular
            onClick={() => setToggleTeams(!toggleTeams)}
            icon={["far", "users-crown"]}
            size="18px"
            theme="basic"
          >
            Teams
          </ButtonRegular>
        </Link>
        {toggleTeams && (
          <TeamList user={user} projects={projects} path={pathname} />
        )}
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
  &:hover {
    background: #4a5568;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;

const mapStateToProps = state => ({
  user: state.user.data,
  projects: state.projects.data
});

export default connect(mapStateToProps, { userSignOut })(Sidebar);
