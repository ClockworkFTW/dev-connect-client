import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import userServices from "../../services/user";
import { editUser } from "../../reducers/user";

import { Editor } from "./Editor";
import { View } from "./View";
import Stack from "../Stack";

const Profile = ({ user, editUser }) => {
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

  const setStack = stack => {
    setProfile({ ...profile, stack });
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
          <Editor
            profile={profile}
            setProfile={setProfile}
            handleSubmit={handleSubmit}
            toggle={toggleEdit}
          />
        ) : (
          <View profile={profile} owner={owner} toggle={toggleEdit} />
        )}
        <Stack
          allowEdit={owner && edit}
          stack={profile.stack}
          setStack={setStack}
        />
      </Container>
    )
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(Profile);
