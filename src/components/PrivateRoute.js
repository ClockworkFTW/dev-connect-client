import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, path, children }) =>
	user ? <Route path={path}>{children}</Route> : <Redirect to="/sign-in" />;

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(PrivateRoute);
