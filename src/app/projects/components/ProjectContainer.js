import React from 'react';
import ProjectForm from '../containers/projectForm'
import ProjectListItem from '../components/ProjectListItem'

class ProjectContainer extends React.Component {
	constructor(props) {
		super(props)
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
							<div className="portlet-title">
								<div className="caption">
									<i className=" icon-layers font-green"></i>
									<span className="caption-subject font-green bold uppercase">To Do List</span>
									<div className="caption-desc font-grey-cascade"> Default list element style. Activate by adding
										<pre className="mt-code">.list-todo</pre>
										className to the
										<pre className="mt-code">ul</pre>
										element.
									</div>
								</div>
							</div>
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
										<div className="list-todo-line"></div>

										{this.props.projects.length ?
											<ul>
												{this.props.projects.map(project => (
												<ProjectListItem
														key={project.id}
														project={project}
														getProjectTasks={this.props.getProjectTasks}/>
												))}
											</ul>
											:
											<h4>No projects !</h4>
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