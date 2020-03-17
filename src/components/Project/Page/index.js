import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { View } from "./View";

const Page = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(e => e._id === id);

  return <View project={project} />;
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps)(Page);
