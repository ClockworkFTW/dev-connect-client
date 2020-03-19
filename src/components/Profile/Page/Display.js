import React from "react";
import styled from "styled-components";

import { ButtonRegular } from "../../Common";
import { Gravatar } from "./Gravatar";
import FriendButton from "./FriendButton";

export const Display = ({ profile, owner, toggle }) => (
  <Container>
    <Gravatar email={profile.email} size="100" />
    <Details>
      <Username>{profile.username}</Username>
      <Location>{profile.location}</Location>
      <Bio>{profile.bio}</Bio>
      <Buttons>
        {owner ? (
          <ButtonRegular
            icon={["far", "pencil"]}
            onClick={toggle}
            theme="basic"
            size="20px"
          />
        ) : (
          <FriendButton id={profile.id} />
        )}
      </Buttons>
    </Details>
  </Container>
);

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Details = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Username = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
`;

const Location = styled.h5`
  margin: 6px 0px 14px 0px;
  font-size: 14px;
  color: #a0aec0;
`;

const Bio = styled.p`
  font-size: 16px;
  color: #4a5568;
`;

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
