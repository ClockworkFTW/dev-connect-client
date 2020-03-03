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

	const toggleEdit = () => {
		setProfile(user);
		setEdit(!edit);
	};

	const setStack = stack => {
		setProfile({ ...profile, stack });
	};

	const handleSubmit = event => {
		event.preventDefault();
		editUser(profile);
	};

	return edit ? (
		<form onSubmit={handleSubmit}>
			<ProfileEdit profile={profile} setProfile={setProfile} />
			<EditButton owner={owner} edit={edit} toggle={toggleEdit} />
			<button type="submit">update profile</button>
			<Stack edit={edit} value={profile.stack} setValue={setStack} />
		</form>
	) : (
		profile && (
			<div>
				<ProfileView profile={profile} />
				<EditButton owner={owner} edit={edit} toggle={toggleEdit} />
				<FriendButton show={!owner} user={user} id={id} />
				<Stack edit={edit} stack={profile.stack} />
				{owner && <FriendList />}
			</div>
		)
	);
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { editUser })(ProfileContainer);
