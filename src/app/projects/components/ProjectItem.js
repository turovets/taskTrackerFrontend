import React from 'react';
import TaskItem from './TaskItem';

class ProjectItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isModalOpen: false
		}
	}

	toggleProject() {
		if (!this.state.isOpen && !this.props.project.tasks) {
			this.props.getProjectTasks(this.props.project.id)
		}
		this.setState({ isOpen: !this.state.isOpen });
	}

	sendEmailBeforeDeleteProject(projectId) {
		this.props.sendEmailDeleteProject(projectId);
		this.setState({ isModalOpen: true })
	}

	handleDeleteProject(projectId) {
		this.props.deleteProject(this.code.value, projectId);
		this.setState({ isModalOpen: false })
	}

	handleCancelDeleteProject() {
		this.setState({ isModalOpen: false });
	}

	render() {
		const project = this.props.project;
		return (
			<li className="mt-list-item">
				{this.state.isModalOpen ?
					<div> Input verification code that we've sent to your email address
						<input type="text"
						       name="verificationCode"
						       ref={(input) => this.code = input}
						       placeholder="type verification code here"
						       className="form-control" />
						<button  type="submit"
						         className="btn green"
											onClick={() => this.handleDeleteProject(project.id)}>
							Send
						</button>
						<button  type="submit"
						         className="btn green"
						         onClick={() => this.handleCancelDeleteProject()}>
							Cancel
						</button>
					</div>
					:null
				}
				<div className="list-todo-icon bg-white">
					<i className="fa fa-database"></i>
				</div>
				<div className="list-todo-item dark">
					<a className="list-toggle-container" data-toggle="collapse" data-parent="#accordion1"
					   href="#task-1" aria-expanded="false"
							onClick={() => this.toggleProject()}
					>
						<div className="list-toggle done uppercase">
							<div className="list-toggle-title bold">{project.name}</div>
							<div className="badge badge-default pull-right bold">3</div>
						</div>
					</a>
					{ this.state.isOpen &&
						<div className="task-list panel-collapse collapse in" id="task-1">
							{project.tasks && project.tasks.length ?
								<ul>
									{project.tasks.map((task) => (
										<TaskItem	key={task.id} task={task}/>	))}
								</ul>
								:
								<h4 style={{textAlign: 'center', padding: '20px'}}>No tasks</h4>
							}
							<div className="task-footer bg-grey">
								<div className="row">
									<div className="col-xs-6">
										<a onClick={() => this.sendEmailBeforeDeleteProject(project.id)}
											className="task-trash"
											href="#">
											<i className="fa fa-trash"></i>
										</a>
									</div>
									<div className="col-xs-6">
										<a className="task-add" href="#">
											<i className="fa fa-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					}
				</div>
			</li>
		);
	}
}

export default ProjectItem;

