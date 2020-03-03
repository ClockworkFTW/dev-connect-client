import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	BrowserRouter as Router,
	Switch,
	Route as PublicRoute
} from "react-router-dom";

import { userInit } from "./reducers/user";

import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";
import ProjectPage from "./components/ProjectPage";

const App = ({ userInit }) => {
	useEffect(() => {
		userInit();
	}, [userInit]);
	return (
		<Router>
			<Header />
			<Switch>
				<PublicRoute path="/" exact>
					<Home />
				</PublicRoute>
				<PublicRoute path="/sign-up">
					<SignUp />
				</PublicRoute>
				<PublicRoute path="/sign-in">
					<SignIn />
				</PublicRoute>
				<PrivateRoute path="/profile/:id">
					<Profile />
				</PrivateRoute>
				<PrivateRoute path="/project" exact>
					<Projects />
				</PrivateRoute>
				<PrivateRoute path="/project/new">
					<ProjectForm />
				</PrivateRoute>
				<PrivateRoute path="/project/:id">
					<ProjectPage />
				</PrivateRoute>
			</Switch>
		</Router>
	);
};

export default connect(null, { userInit })(App);
