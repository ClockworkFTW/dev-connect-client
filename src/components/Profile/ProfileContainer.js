import React, { useState } from "react";
import { connect } from "react-redux";

import { editUser } from "../../reducers/user";

import { ProfileView } from "./ProfileView";
import { ProfileEdit } from "./ProfileEdit";

const ProfileContainer = ({ user, editUser }) => {
	const [edit, setEdit] = useState(false);

	const [location, setLocation] = useState(user.location);
	const [bio, setBio] = useState(user.bio);
	const [friends, setFriends] = useState(user.friends);
	const [stack, setStack] = useState(user.stack);

	const handleSubmit = event => {
		event.preventDefault();
		editUser({ id: user._id, location, bio, friends, stack });
	};

	return edit ? (
		<ProfileEdit
			handleSubmit={handleSubmit}
			user={user}
			location={location}
			setLocation={setLocation}
			bio={bio}
			setBio={setBio}
			friends={friends}
			setFriends={setFriends}
			stack={stack}
			setStack={setStack}
			edit={edit}
			setEdit={setEdit}
		/>
	) : (
		<ProfileView user={user} edit={edit} setEdit={setEdit} />
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(ProfileContainer);
