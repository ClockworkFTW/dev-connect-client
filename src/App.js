import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route as PublicRoute
} from "react-router-dom";

import { userInit } from "./reducers/user";

import { GlobalStyle, PrivateRoute } from "./components/Common";
import { LandingPage } from "./components/Landing";
import { SignUpPage, SignInPage } from "./components/Authentication";
import { ProfilePage } from "./components/Profile";
import { ProjectFeed, ProjectForm, ProjectPage } from "./components/Project";
import { TechPage } from "./components/Tech";
import { TeamPage, TeamAdmin } from "./components/Team";
import MessagePage from "./routes/MessagePage";

const App = ({ userInit }) => {
  useEffect(() => {
    userInit();
  }, [userInit]);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <PublicRoute path="/" exact>
          <LandingPage />
        </PublicRoute>
        <PublicRoute path="/sign-up">
          <SignUpPage />
        </PublicRoute>
        <PublicRoute path="/sign-in">
          <SignInPage />
        </PublicRoute>
        <PrivateRoute path="/profile/:id">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/project" exact>
          <ProjectFeed />
        </PrivateRoute>
        <PrivateRoute path="/project/new">
          <ProjectForm />
        </PrivateRoute>
        <PrivateRoute path="/project/:id">
          <ProjectPage />
        </PrivateRoute>
        <PrivateRoute path="/tech/:id">
          <TechPage />
        </PrivateRoute>
        <PrivateRoute path="/team/:id" exact>
          <TeamPage />
        </PrivateRoute>
        <PrivateRoute path="/team/:id/admin" exact>
          <TeamAdmin />
        </PrivateRoute>
        <PrivateRoute path="/message">
          <MessagePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default connect(null, { userInit })(App);
