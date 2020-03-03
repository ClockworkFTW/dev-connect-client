import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { editUser } from "../../reducers/user";

const FriendButton = ({ show, id, user, editUser }) => {
	const { friends } = user;

	let isFriend = false;
	friends.forEach(e => {
		if (e._id === id) {
			isFriend = true;
		}
	});

	const addFriend = () => {
		const updatedFriends = [...friends, id];
		editUser({ friends: updatedFriends });
	};

	const removeFriend = () => {
		const updatedFriends = friends.filter(friend => friend._id !== id);
		editUser({ friends: updatedFriends });
	};

	return user && show ? (
		<Button type="button" onClick={isFriend ? removeFriend : addFriend}>
			{isFriend ? "remove friend" : "add friend"}
		</Button>
	) : null;
};

const Button = styled.button``;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(FriendButton);
