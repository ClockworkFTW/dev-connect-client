import React, { useState } from "react";
import { connect } from "react-redux";

import { editUser } from "../../reducers/user";

import Stack from "../Stack";
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
		<form onSubmit={handleSubmit}>
			<button type="button" onClick={() => setEdit(!edit)}>
				discard changes
			</button>
			<ProfileEdit
				user={user}
				location={location}
				setLocation={setLocation}
				bio={bio}
				setBio={setBio}
			/>
			<Stack edit={edit} value={stack} setValue={setStack} />
			<button type="submit">update</button>
		</form>
	) : (
		<div>
			<button type="button" onClick={() => setEdit(!edit)}>
				edit profle
			</button>
			<ProfileView user={user} />
			<Stack edit={edit} stack={user.stack} />
		</div>
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(ProfileContainer);
