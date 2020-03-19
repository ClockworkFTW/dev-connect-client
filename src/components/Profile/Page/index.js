import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import userServices from "../../../services/user";
import { editUser } from "../../../reducers/user";

import { Layout } from "../../Common";
import { Menu } from "./Menu";
import { View } from "./View";

const Page = ({ user, editUser }) => {
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
    const update = {
      location: profile.location,
      bio: profile.bio,
      stack: profile.stack
    };
    editUser(update);
    setEdit(false);
  };

  return (
    <Layout>
      <Menu />
      {profile && (
        <View
          owner={owner}
          edit={edit}
          toggleEdit={toggleEdit}
          profile={profile}
          setProfile={setProfile}
          handleSubmit={handleSubmit}
        />
      )}
    </Layout>
  );
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(Page);
