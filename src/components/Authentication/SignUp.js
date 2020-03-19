import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { userSignUp } from "../../reducers/user";

const SignUp = ({ pending, user, error, userSignUp }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { email, username, passwordOne, passwordTwo };
    userSignUp(credentials);
  };

  return user ? (
    <Redirect to="/project" />
  ) : (
    <div>
      <h1>Sign Up</h1>
      <div>
        {pending && <p>loading...</p>}
        {error && <p>{error.message}</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordOne}
          onChange={event => setPasswordOne(event.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordTwo}
          onChange={event => setPasswordTwo(event.target.value)}
        />
        <button type="submit">sign up</button>
        <Link to="/sign-in">sign in</Link>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  pending: state.user.pending,
  user: state.user.data,
  error: state.user.error
});

export default connect(mapStateToProps, { userSignUp })(SignUp);
