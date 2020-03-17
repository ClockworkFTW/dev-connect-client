import React from "react";

import { Layout } from "../components/Common";
import Menu from "../components/Project/Feed/Menu";
import { Feed } from "../components/Project";

const ProjectFeed = () => (
  <Layout>
    <Menu />
    <Feed />
  </Layout>
);

export default ProjectFeed;
