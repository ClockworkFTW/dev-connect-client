import React from "react";
import { connect } from "react-redux";

import { SectionHeader } from "../Common";
import { Friend } from "./Friend";

const FriendContainer = ({ friends }) => (
  <div>
    <SectionHeader>Friend List</SectionHeader>
    <ul>
      {friends.map(friend => (
        <Friend key={friend._id} friend={friend} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(FriendContainer);
