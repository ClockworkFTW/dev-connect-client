import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import userServices from "../../services/user";
import { editUser } from "../../reducers/user";

import { ProfileView } from "./ProfileView";
import { ProfileEdit } from "./ProfileEdit";
import Stack from "../Stack";
import { FriendList } from "../Friend";

const ProfileContainer = ({ user, editUser }) => {
  const { id } = useParams();
  const owner = user.id === id;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!owner) {
      userServices.fetch(id, setProfile);
    } else {
      setProfile(user);
    }
  }, [id, owner, user]);

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setProfile(user);
    setEdit(!edit);
  };

  const handleSubmit = event => {
    event.preventDefault();
    editUser(profile);
    setEdit(false);
  };

  return (
    profile && (
      <Container>
        {edit ? (
          <ProfileEdit
            profile={profile}
            setProfile={setProfile}
            handleSubmit={handleSubmit}
            toggle={toggleEdit}
          />
        ) : (
          <ProfileView profile={profile} owner={owner} toggle={toggleEdit} />
        )}
        <Stack stack={profile.stack} size="50" />
        {owner && <FriendList friends={user.friends} />}
      </Container>
    )
  );
};

const Container = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(ProfileContainer);
