import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route as PublicRoute
} from "react-router-dom";

import { userInit } from "./reducers/user";

import { GlobalStyle, PageContainer } from "./components/Common";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Project from "./routes/Project";
import ProjectForm from "./components/ProjectForm";
import { ProjectPage } from "./components/ProjectPage";
import { TechPage } from "./components/TechPage";

const App = ({ userInit }) => {
  useEffect(() => {
    userInit();
  }, [userInit]);
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <PageContainer>
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
            <Project />
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
      </PageContainer>
    </Router>
  );
};

export default connect(null, { userInit })(App);
