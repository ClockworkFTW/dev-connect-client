import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProjects } from "../../reducers/project";

import { ProjectCard } from "./ProjectCard";

const Projects = ({ projects, fetchProjects }) => {
	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<div>
			<Link to="/project/new">
				<button>create project</button>
			</Link>
			{projects.map(project => (
				<ProjectCard key={project._id} project={project} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps, { fetchProjects })(Projects);
