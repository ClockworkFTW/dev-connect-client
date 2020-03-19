import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { updateProject, deleteProject } from "../../../reducers/project";

import { Layout } from "../../Common";
import { Menu } from "./Menu";
import { Applicants } from "./Applicants";
import { Members } from "./Members";
import { Delete } from "./Delete";

const Admin = ({ projects, updateProject, deleteProject }) => {
  // Get project from id param
  const { id } = useParams();
  const project = projects.find(project => project._id === id);

  // Create array or applicant and team id's
  let applicants = project.applicants.map(applicant => applicant.id);
  let team = project.team.map(member => member.id);

  // Accept applicant
  const handleAccept = user => {
    team = [...team, user];
    applicants = applicants.filter(applicant => applicant !== user);
    updateProject(id, { team, applicants });
  };

  // Reject applicant
  const handleReject = user => {
    applicants = applicants.filter(applicant => applicant !== user);
    updateProject(id, { applicants });
  };

  // Remove team member
  const handleRemove = user => {
    team = team.filter(member => member !== user);
    updateProject(id, { team });
  };

  // Delete project and return to feed page
  let history = useHistory();
  const handleDelete = () => {
    deleteProject(id);
    history.push("/project");
  };

  return (
    <Layout>
      <Menu project={project} />
      <>
        <Applicants
          project={project}
          accept={handleAccept}
          reject={handleReject}
        />
        <Members project={project} remove={handleRemove} />
        <Delete projectName={project.name} handleDelete={handleDelete} />
      </>
    </Layout>
  );
};

export default connect(state => ({ projects: state.projects.data }), {
  updateProject,
  deleteProject
})(Admin);
