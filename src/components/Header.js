import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userSignOut } from "../reducers/user";

const Header = ({ user, userSignOut }) => (
	<div>
		{user ? (
			<div>
				<Link to={`/profile/${user.id}`}>profile</Link>
				<Link to="/project">projects</Link>
				<button onClick={userSignOut}>sign out</button>
			</div>
		) : (
			<div>
				<Link to="/sign-in">sign in</Link>
			</div>
		)}
	</div>
);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps, { userSignOut })(Header);
