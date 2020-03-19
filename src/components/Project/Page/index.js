import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { updateProject } from "../../../reducers/project";

import { Layout } from "../../Common";
import { Menu } from "./Menu";
import { View } from "./View";

const Page = ({ user, projects, updateProject }) => {
  // Select project based on id param
  const { id } = useParams();
  const project = projects.find(project => project._id === id);

  // Check if user has applied
  let hasApplied = false;
  project.applicants.forEach(applicant => {
    if (applicant.id === user.id) {
      hasApplied = true;
    }
  });

  // Check if user is a member
  let isMember = false;
  project.team.forEach(member => {
    if (member.id === user.id) {
      isMember = true;
    }
  });

  // Check if user is manager
  const isManager = project.manager.id === user.id;

  // Display apply button if user is not manager or member
  const showApply = !isManager && !isMember;

  const handleApply = () => {
    let applicants = project.applicants.map(applicant => applicant.id);
    // If user has applied, remove from applicants list
    if (hasApplied) {
      applicants = applicants.filter(applicant => applicant !== user.id);
    }
    // Else, add user to applicants list
    else {
      applicants = [...applicants, user.id];
    }
    updateProject(id, { applicants });
  };

  return (
    <Layout>
      <Menu
        showApply={showApply}
        hasApplied={hasApplied}
        handleApply={handleApply}
      />
      <View project={project} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  user: state.user.data,
  projects: state.projects.data
});

export default connect(mapStateToProps, { updateProject })(Page);
