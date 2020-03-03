import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import userServices from "../../services/user";
import { editUser } from "../../reducers/user";

import { EditButton } from "./EditButton";
import { ProfileView } from "./ProfileView";
import { ProfileEdit } from "./ProfileEdit";
import Stack from "../Stack";
import { FriendList, FriendButton } from "../Friend";

const ProfileContainer = ({ user, editUser }) => {
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

	const setStack = stack => {
		setProfile({ ...profile, stack });
	};

	const handleSubmit = event => {
		event.preventDefault();
		editUser(profile);
	};

	return edit ? (
		<form onSubmit={handleSubmit}>
			<EditButton owner={owner} edit={edit} setEdit={setEdit} />
			<ProfileEdit profile={profile} setProfile={setProfile} />
			<Stack edit={edit} value={profile.stack} setValue={setStack} />
			<button type="submit">update</button>
		</form>
	) : (
		profile && (
			<div>
				<FriendButton show={!owner} user={user} id={id} />
				<EditButton owner={owner} edit={edit} setEdit={setEdit} />
				<ProfileView profile={profile} />
				<Stack edit={edit} stack={profile.stack} />
				{owner && <FriendList />}
			</div>
		)
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(ProfileContainer);
