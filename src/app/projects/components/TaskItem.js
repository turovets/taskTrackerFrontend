import React from 'react';

const TaskItem = ({ task }) => {

		return (
			<li className="task-list-item done">
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
						<a href="#">{task.name}</a>
					</h4>
					<p>{task.description}</p>
				</div>
			</li>
		);
};

export default TaskItem;

