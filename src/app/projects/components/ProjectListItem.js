import React from 'react';

class ProjectListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	toggleProject() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		const project = this.props.project;
		return (
			<li className="mt-list-item">
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
							<ul>
								<li className="task-list-item done">
									<div className="task-icon">
										<a href="#">
											<i className="fa fa-database"></i>
										</a>
									</div>
									<div className="task-status">
										<a className="done" href="#">
											<i className="fa fa-check"></i>
										</a>
										<a className="pending" href="#">
											<i className="fa fa-close"></i>
										</a>
									</div>
									<div className="task-content">
										<h4 className="uppercase bold">
											<a href="#">Database Optimization</a>
										</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum
											gravida mauris, a tincidunt dolor porttitor eu. </p>
									</div>
								</li>
								<li className="task-list-item">
									<div className="task-icon">
										<a href="#">
											<i className="fa fa-table"></i>
										</a>
									</div>
									<div className="task-status">
										<a className="done" href="#">
											<i className="fa fa-check"></i>
										</a>
										<a className="pending" href="#">
											<i className="fa fa-close"></i>
										</a>
									</div>
									<div className="task-content">
										<h4 className="uppercase bold">
											<a href="#">Table Sorting</a>
										</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum
											gravida mauris, a tincidunt dolor porttitor eu. </p>
									</div>
								</li>
								<li className="task-list-item">
									<div className="task-icon">
										<a href="#">
											<i className="fa fa-pencil"></i>
										</a>
									</div>
									<div className="task-status">
										<a className="done" href="#">
											<i className="fa fa-check"></i>
										</a>
										<a className="pending" href="#">
											<i className="fa fa-close"></i>
										</a>
									</div>
									<div className="task-content">
										<h4 className="uppercase bold">
											<a href="#">Data Entry</a>
										</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum
											gravida mauris, a tincidunt dolor porttitor eu. </p>
									</div>
								</li>
							</ul>
							<div className="task-footer bg-grey">
								<div className="row">
									<div className="col-xs-6">
										<a className="task-trash" href="#">
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

export default ProjectListItem;

