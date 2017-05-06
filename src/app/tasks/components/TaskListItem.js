import React from 'react';

class TaskListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const task = this.props.task;
		return (
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
						<a href="#">{task.name}</a>
					</h4>
					<p>{task.description}</p>
				</div>
			</li>
		);
	}
}

export default TaskListItem;

