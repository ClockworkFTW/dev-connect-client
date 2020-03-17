import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route as PublicRoute
} from "react-router-dom";

import { userInit } from "./reducers/user";

import { GlobalStyle, PrivateRoute } from "./components/Common";
import LandingPage from "./routes/LandingPage";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";
import ProfilePage from "./routes/ProfilePage";
import ProjectFeed from "./routes/ProjectFeed";
import ProjectForm from "./routes/ProjectForm";
import ProjectPage from "./routes/ProjectPage";
import TechPage from "./routes/TechPage";

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
      </Switch>
    </Router>
  );
};

export default connect(null, { userInit })(App);
