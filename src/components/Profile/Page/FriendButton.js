import React from "react";
import { connect } from "react-redux";

import { editUser } from "../../../reducers/user";

import { ButtonRegular } from "../../Common";

const FriendButton = ({ id, user, editUser }) => {
  const { friends } = user;

  let isFriend = false;
  friends.forEach(friend => {
    if (friend.id === id) {
      isFriend = true;
    }
  });

  const addFriend = () => {
    const updatedFriends = [...friends, id];
    editUser({ friends: updatedFriends });
  };

  const removeFriend = () => {
    const updatedFriends = friends.filter(friend => friend.id !== id);
    editUser({ friends: updatedFriends });
  };

  return (
    user && (
      <ButtonRegular
        type="button"
        icon={["far", isFriend ? "user-minus" : "user-plus"]}
        onClick={isFriend ? removeFriend : addFriend}
        size="20px"
        theme="basic"
      />
    )
  );
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(FriendButton);
