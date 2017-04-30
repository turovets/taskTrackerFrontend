import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: ''
		};

	}

	handleInputChange(e) {
		let state = {...this.state};

		state[e.target.name] = e.target.value;
		this.setState(state);

	}

	handleUserSubmit(e) {
		e.preventDefault();
		let name = this.state.name.trim(),
			  description = this.state.description.trim();

		const project = {
			name,
			description
		};

		this.props.addProject(project);
		this.resetForm();
	}

	resetForm() {
		this.setState({
			name: '',
			description: ''
		});
	};

	render() {
		let input;
		return (
			<div className="portlet light bordered">
				<div className="portlet-title">
					<div className="caption">
						<i className="icon-speech font-green"></i>
						<span className="caption-subject bold font-green uppercase">New Project</span>
					</div>
				</div>
				<div className="portlet-body">
					<form role="form" action="#" onSubmit={(e) => this.handleUserSubmit(e)}>
						<div className="form-group">
							<label className="control-label">Name</label>
							<input type="text"
							       name="name"
							       value={this.state.name}
							       onChange={(e) => this.handleInputChange(e)}
							       placeholder="Project name"
							       className="form-control" />
						</div>
						<div className="form-group">
							<label className="control-label">Description</label>
							<textarea className="form-control"
							          name="description"
							          value={this.state.description}
							          onChange={(e) => this.handleInputChange(e)}
							          rows="3"
							          placeholder="Project description"
							></textarea>
						</div>
						<div className="margin-top-40">
							<button  type="submit" className="btn green">Create a project</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default ProjectForm;