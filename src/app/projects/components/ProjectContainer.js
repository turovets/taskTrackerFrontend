import React from 'react';
import ProjectForm from '../containers/projectForm'
import ProjectItem from '../containers/projectItem'

class ProjectContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (!this.props.projects.length) {
				this.props.getProjects();
		}
	}

	render() {
		return (
			<div className="page-content-wrapper">
				<div className="page-content">
					<div className="col-lg-6">
						<div className="portlet light portlet-fit bordered">
							<div className="portlet-body">
								<div className="mt-element-list">
									<div className="mt-list-head list-todo red">
										<div className="list-head-title-container">
											<h3 className="list-title">My Projects</h3>
											<div className="list-head-count">
												<div className="list-head-count-item">
													<i className="fa fa-check"></i> 15
												</div>
												<div className="list-head-count-item">
													<i className="fa fa-cog"></i> 34
												</div>
											</div>
										</div>
										<a href="#">
											<div className="list-count pull-right red-mint">
												<i className="fa fa-plus"></i>
											</div>
										</a>
									</div>
									<div className="mt-list-container list-todo" id="accordion1" role="tablist"
											 aria-multiselectable="true">
										{this.props.projects.length ?
											<ul>
												{this.props.projects.map(project => (
												<ProjectItem
														key={project.id}
														project={project}	/>
												))}
											</ul>
											:
											<h4 style={{textAlign: 'center', padding: '20px'}}>No projects</h4>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<ProjectForm />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectContainer;