import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Stack from "./Stack";

const ProjectPage = ({ projects }) => {
	const { id } = useParams();
	const project = projects.find(e => e._id === id);
	return (
		<div>
			<h1>Project: {project.name}</h1>
			<h2>
				<span>Manager: </span>
				<Link to={`/profile/${project.manager._id}`}>
					{project.manager.username}
				</Link>
			</h2>
			<h3>Difficulty: {project.difficulty}</h3>
			<p>{project.description}</p>
			<Stack stack={project.stack} />
		</div>
	);
};

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps)(ProjectPage);
