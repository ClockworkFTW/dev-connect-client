import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../reducers/project";

const Projects = ({ projects, fetchProjects }) => {
	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	console.log(projects);

	return (
		<div>
			<h1>Projects</h1>
		</div>
	);
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps, { fetchProjects })(Projects);
