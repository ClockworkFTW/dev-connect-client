import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../../reducers/project";
import { matchPercent, voteCount } from "../../util";
import { ProjectCard } from "./ProjectCard";

const Projects = ({ projects, fetchProjects }) => {
	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<div>
			{projects.map(project => (
				<ProjectCard key={project._id} project={project} />
			))}
		</div>
	);
};

const filterProjects = ({ user, projects, projectSearch, projectSort }) => {
	let result = projects.data.filter(project =>
		project.name.toLowerCase().includes(projectSearch.toLowerCase())
	);

	switch (projectSort) {
		case "new":
			result = result.sort(
				(a, b) => new Date(b.created) - new Date(a.created)
			);
			break;
		case "popular":
			result = result.sort(
				(a, b) => voteCount(b.votes) - voteCount(a.votes)
			);
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

const mapStateToProps = state => ({ projects: filterProjects(state) });

export default connect(mapStateToProps, { fetchProjects })(Projects);
