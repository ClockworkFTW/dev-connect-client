import React from "react";

import { Editor } from "./Editor";
import { Display } from "./Display";
import Stack from "../../Stack";
import { TeamList } from "../../Team";

export const View = props => {
  const { owner, edit, toggleEdit, profile, setProfile, handleSubmit } = props;
  return (
    <>
      {edit ? (
        <Editor
          profile={profile}
          setProfile={setProfile}
          handleSubmit={handleSubmit}
          toggle={toggleEdit}
        />
      ) : (
        <Display profile={profile} owner={owner} toggle={toggleEdit} />
      )}
      <Stack
        allowEdit={owner && edit}
        stack={profile.stack}
        setStack={stack => setProfile({ ...profile, stack })}
      />
      <TeamList id={profile.id} />
    </>
  );
};
