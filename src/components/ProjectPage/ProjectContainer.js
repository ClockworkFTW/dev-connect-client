import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { ProjectView } from "./ProjectView";

const ProjectContainer = ({ projects }) => {
	const { id } = useParams();
	const project = projects.find(e => e._id === id);
	return <ProjectView project={project} />;
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps)(ProjectContainer);
