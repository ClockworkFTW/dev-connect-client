import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { createProject } from "../../../reducers/project";

import { Layout } from "../../Common";
import { Menu } from "./Menu";
import { View } from "./View";

const ProjectForm = ({ createProject }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    difficulty: "",
    stack: []
  });

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    createProject(project);
    history.push("/project");
  };

  return (
    <Layout>
      <Menu />
      <View
        project={project}
        setProject={setProject}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default connect(null, { createProject })(ProjectForm);
