import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { userSignIn } from "../reducers/user";

const SignIn = ({ pending, user, error, userSignIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		const credentials = { username, password };
		userSignIn(credentials);
	};

	return user ? (
		<Redirect to="/project" />
	) : (
		<div>
			<h1>Sign In</h1>
			<div>
				{pending && <p>loading...</p>}
				{error && <p>{error.message}</p>}
			</div>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={event => setUsername(event.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<button type="submit">sign in</button>
				<Link to="/sign-up">sign up</Link>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	pending: state.user.pending,
	user: state.user.data,
	error: state.user.error
});

export default connect(mapStateToProps, { userSignIn })(SignIn);
