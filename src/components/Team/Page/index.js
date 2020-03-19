import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { updateProject } from "../../../reducers/project";

import { Layout } from "../../Common";
import { Menu } from "./Menu";
import { View } from "./View";

const Page = ({ projects }) => {
  // Get project from id param
  const { id } = useParams();
  const project = projects.find(project => project._id === id);

  return (
    <Layout>
      <Menu project={project} />
      <View project={project} />
    </Layout>
  );
};

export default connect(state => ({ projects: state.projects.data }), {
  updateProject
})(Page);
