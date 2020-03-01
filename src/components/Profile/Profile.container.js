import React from "react";
import { connect } from "react-redux";

import { ProfileComponent } from "./Profile.component";

const ProfileContainer = ({ user }) => {
	return <ProfileComponent user={user} />;
};

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(ProfileContainer);
