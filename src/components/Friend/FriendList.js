import React from "react";
import { connect } from "react-redux";

import { Friend } from "./Friend";

const FriendContainer = ({ user }) =>
	user && (
		<ul>
			{user.friends.map(friend => (
				<Friend key={friend._id} friend={friend} />
			))}
		</ul>
	);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(FriendContainer);
