import React from "react";
import { connect } from "react-redux";

import { SectionHeader } from "../Common";
import { Friend } from "./Friend";

const FriendContainer = ({ user }) =>
	user && (
		<div>
			<SectionHeader>Friend List</SectionHeader>
			<ul>
				{user.friends.map(friend => (
					<Friend key={friend._id} friend={friend} />
				))}
			</ul>
		</div>
	);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(FriendContainer);
