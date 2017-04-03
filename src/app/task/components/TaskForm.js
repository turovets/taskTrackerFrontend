import React from 'react';

class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			dueDate: '',
			status: 'Pending'
		};

	}

	handleInputChange(e) {
		let state = {...this.state};

		state[e.target.name] = e.target.value;
		this.setState(state);

	}

	handleUserSubmit(e) {
		e.preventDefault();
		let title = this.state.title.trim(),
			  description = this.state.description.trim(),
			  dueDate = this.state.dueDate,
			  status = this.state.status;

		const task = {
			title: title,
			description: description,
			dueDate: dueDate,
			status: status,
		};

		this.props.addTask(task)
	};


	render() {
		let input;
		return (
				<form action="#" className="form-horizontal" onSubmit={(e) => this.handleUserSubmit(e)}>
					<div className="form">
						<div className="form-group">
							<div className="col-md-8 col-sm-8">
								<div className="todo-taskbody-user">
									<img className="todo-userpic pull-left" src="assets/pages/media/users/avatar6.jpg"
											 style={{width: '50px', height: '50px'}}/>
									<span className="todo-username pull-left">Vanessa Bond</span>
									<button type="button"
													className="todo-username-btn btn btn-circle btn-default btn-sm">&nbsp;
										edit&nbsp;</button>
								</div>
							</div>
							<div className="col-md-4 col-sm-4">
								<div className="todo-taskbody-date pull-right">
									<button type="button"
													className="todo-username-btn btn btn-circle btn-default btn-sm">&nbsp;
										Complete &nbsp;</button>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<input type="text"
											 name="title"
											 value={this.state.title}
											 onChange={(e) => this.handleInputChange(e)}
											 className="form-control todo-taskbody-tasktitle"
											 placeholder="Task Title..."
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
									<textarea name="description"
														value={this.state.description}
														onChange={(e) => this.handleInputChange(e)}
														className="form-control todo-taskbody-taskdesc"
														placeholder="Task Description..."
									></textarea>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<div className="input-icon">
									<i className="fa fa-calendar"></i>
									<input type="text"
												 name="dueDate"
												 value={this.state.dueDate}
												 onChange={(e) => this.handleInputChange(e)}
												 className="form-control todo-taskbody-due"
												 placeholder="Due Date..."/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-12">
								<select name="status"
												value={this.state.status}
												onChange={(e) => this.handleInputChange(e)}
												className="form-control todo-taskbody-tags select2-hidden-accessible"
												tabIndex="-1" aria-hidden="true">
									<option value="Pending">Pending</option>
									<option value="Completed">Completed</option>
									<option value="Testing">Testing</option>
									<option value="Approved">Approed</option>
									<option value="Rejected">Rejected</option>
								</select>
							</div>
						</div>
						<div className="form-actions right todo-form-actions">
							<button type="submit" className="btn btn-circle btn-sm green"
							>
								Save Changes
							</button>
							<button  className="btn btn-circle btn-sm btn-default">Cancel</button>
						</div>
					</div>
				</form>
		)
	}
}

export default TaskForm;