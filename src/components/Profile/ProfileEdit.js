import React from "react";
import styled from "styled-components";

import Gravatar from "../Gravatar";
import { ButtonRegular } from "../Common";

export const ProfileEdit = ({ profile, setProfile, toggle, handleSubmit }) => (
  <Container onSubmit={handleSubmit}>
    <Gravatar email={profile.email} size="100" />
    <Details>
      <Username>{profile.username}</Username>
      <Location
        type="text"
        placeholder="location"
        value={profile.location}
        onChange={event =>
          setProfile({ ...profile, location: event.target.value })
        }
      />
      <Bio
        placeholder="bio"
        value={profile.bio}
        onChange={event => setProfile({ ...profile, bio: event.target.value })}
      />
      <Buttons>
        <ButtonRegular
          type="submit"
          icon={["far", "check"]}
          theme="basic"
          size="20px"
        />
        <ButtonRegular
          icon={["far", "times"]}
          onClick={toggle}
          theme="basic"
          size="20px"
        />
      </Buttons>
    </Details>
  </Container>
);

const Container = styled.form`
  position: relative;
  display: flex;
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

const Location = styled.input`
  display: block;
  margin: 6px 0px 14px 0px;
  padding: 0;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  color: #a0aec0;
`;

const Bio = styled.textarea`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  color: #4a5568;
`;

const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
