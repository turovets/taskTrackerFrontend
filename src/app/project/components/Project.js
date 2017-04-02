import React from 'react';

let Project = ({ dispatch }) => {

	return (
    <ul>
			{
				this.props.project.projects.length ?
					<ul>
						{this.props.dashboard.projects.map(project => (
							<li key={project.id}>{project.name}</li>
						))}
					</ul>
					:
					<h4>No projects !</h4>
			}
    </ul>
	);
};
export default Project;