import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../../../reducers/project";
import { matchPercent, voteCount } from "../../../util";

import { Layout } from "../../Common";
import Menu from "./Menu";
import { View } from "./View";

const Feed = ({ projects, fetchProjects }) => {
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <Layout>
      <Menu />
      <View projects={projects} />
    </Layout>
  );
};

const filterProjects = ({ user, projects, projectSearch, projectSort }) => {
  let result = projects.data.filter(project =>
    project.name.toLowerCase().includes(projectSearch.toLowerCase())
  );

  switch (projectSort) {
    case "new":
      result = result.sort((a, b) => new Date(b.created) - new Date(a.created));
      break;
    case "popular":
      result = result.sort((a, b) => voteCount(b.votes) - voteCount(a.votes));
      break;
    default:
      result = result.sort(
        (a, b) =>
          matchPercent(user.data.stack, b.stack) -
          matchPercent(user.data.stack, a.stack)
      );
      break;
  }

  return result;
};

export default connect(state => ({ projects: filterProjects(state) }), {
  fetchProjects
})(Feed);
