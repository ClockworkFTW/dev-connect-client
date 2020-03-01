import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProjects } from "../reducers/project";

const Projects = ({ projects, fetchProjects }) => {
	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<div>
			<h1>Projects</h1>
			{projects.map(project => (
				<div key={project._id}>
					<Link to={`/project/${project._id}`}>{project.name}</Link>
				</div>
			))}
			<Link to="/project/new">create a new project</Link>
		</div>
	);
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps, { fetchProjects })(Projects);
