import React from 'react';
import {Link} from 'react-router';
//import TaskForm from '../../task/components/TaskForm';
import TaskContainer from '../../task/containers/TaskContainer';
import ProjectContainer from '../../project/containers/Project';

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchTasksIfNeeded();
		this.props.fetchProjectsIfNeeded();
	}

	render() {
		return (
			<div>
				<div className="page-content-wrapper">
					<div className="page-content">
						<div className="page-head">
							<div className="page-title">
								<h1>Admin Dashboard
									<small>statistics, charts, recent events and reports</small>
								</h1>
							</div>
						</div>
						<ul className="page-breadcrumb breadcrumb">
							<li>
								<a href="index.html">Home</a>
								<i className="fa fa-circle"></i>
							</li>
							<li>
								<span className="active">Dashboard</span>
							</li>
						</ul>
						<div className="clearfix"></div>
						<div>
							<div className="todo-ui">
								<div className="todo-sidebar">
									<div className="portlet light bordered">
										<div className="portlet-title">
											<div className="caption" data-toggle="collapse" data-target=".todo-project-list-content">
												<span className="caption-subject font-green-sharp bold uppercase">PROJECTS </span>
												<span className="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view project list</span>
											</div>
											<div className="actions">
												<div className="btn-group">
													<a className="btn green btn-circle btn-outline btn-sm todo-projects-config" href="#"
													   data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
														<i className="icon-settings"></i> &nbsp;
														<i className="fa fa-angle-down"></i>
													</a>
													<ul className="dropdown-menu pull-right">
														<li>
															<a href="#"> New Project </a>
														</li>
														<li className="divider"></li>
														<li>
															<a href="#"> Pending
																<span className="badge badge-danger"> 4 </span>
															</a>
														</li>
														<li>
															<a href="#"> Completed
																<span className="badge badge-success"> 12 </span>
															</a>
														</li>
														<li>
															<a href="#"> Overdue
																<span className="badge badge-warning"> 9 </span>
															</a>
														</li>
														<li className="divider"></li>
														<li>
															<a href="#"> Archived Projects </a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="portlet-body todo-project-list-content" style={{height: 'auto'}}>
											<div className="todo-project-list">
												<ul className="nav nav-stacked">
													{
														this.props.project.projects.length ?
															<ul>
																{this.props.project.projects.map(project => (
																	<li key={project.id}>
																		<a href="#">
																			<span className="badge badge-info"> 6 </span> {project.name} </a>
																	</li>
																))}
															</ul>
															:
															<h4>No projects !</h4>
													}
												</ul>
											</div>
										</div>
									</div>
									<div className="portlet light bordered">
										<div className="portlet-title">
											<div className="caption" data-toggle="collapse" data-target=".todo-project-list-content-tags">
												<span className="caption-subject font-red bold uppercase">TAGS </span>
												<span
													className="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view</span>
											</div>
											<div className="actions">
												<div className="actions">
													<a className="btn btn-circle grey-salsa btn-outline btn-sm" href="#">
														<i className="fa fa-plus"></i> Add </a>
												</div>
											</div>
										</div>
										<div className="portlet-body todo-project-list-content todo-project-list-content-tags"
												 style={{height: 'auto'}}>
											<div className="todo-project-list">
												<ul className="nav nav-pills nav-stacked">
													<li>
														<a href="#">
															<span className="badge badge-danger"> 6 </span> Pending </a>
													</li>
													<li>
														<a href="#">
															<span className="badge badge-info"> 2 </span> Completed </a>
													</li>
													<li>
														<a href="#">
															<span className="badge badge-success"> 14 </span> In Progress </a>
													</li>
													<li>
														<a href="#">
															<span className="badge badge-warning"> 6 </span> Closed </a>
													</li>
													<li>
														<a href="#">
															<span className="badge badge-info"> 2 </span> Delivered </a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="todo-content">
									<div className="portlet light bordered">
										<div className="portlet-title">
											<div className="caption">
												<i className="icon-bar-chart font-green-sharp hide"></i>
												<span className="caption-helper">GlobalEx Tasks:</span> &nbsp;
												<span className="caption-subject font-green-sharp bold uppercase">Tune Website</span>
											</div>
											<div className="actions">
												<div className="btn-group">
													<a className="btn green btn-circle btn-sm" href="#" data-toggle="dropdown"
														 data-hover="dropdown" data-close-others="true"> MANAGE
														<i className="fa fa-angle-down"></i>
													</a>
													<ul className="dropdown-menu pull-right">
														<li>
															<a href="#"> New Task </a>
														</li>
														<li className="divider"></li>
														<li>
															<a href="#"> Pending
																<span className="badge badge-danger"> 4 </span>
															</a>
														</li>
														<li>
															<a href="#"> Completed
																<span className="badge badge-success"> 12 </span>
															</a>
														</li>
														<li>
															<a href="#"> Overdue
																<span className="badge badge-warning"> 9 </span>
															</a>
														</li>
														<li className="divider"></li>
														<li>
															<a href="#"> Delete Project </a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="portlet-body">
											<div className="row">
												<div className="col-md-5 col-sm-4">

														{
															this.props.task.tasks.length ?
																<div className="todo-tasklist">
																	{this.props.task.tasks.map(task => (
																		<div key={task.id} className="todo-tasklist-item todo-tasklist-item-border-green">
																			<img className="todo-userpic pull-left" src="assets/pages/media/users/avatar4.jpg"
																					 style={{width: '27px', height: '27px'}}/>
																			<div className="todo-tasklist-item-title"> {task.name} </div>
																			<div className="todo-tasklist-item-text"> {task.description}
																			</div>
																			<div className="todo-tasklist-controls pull-left">
                                                                <span className="todo-tasklist-date">
                                                                    <i
																																			className="fa fa-calendar"></i> {task.dueDate} </span>
																				<span className="todo-tasklist-badge badge badge-roundless">{task.status}</span>
																			</div>
																		</div>
																	))}
																</div>
																:
																<h4>No tasks !</h4>
														}
												</div>
												<div className="todo-tasklist-devider"></div>
												<div className="col-md-7 col-sm-8">
													<TaskContainer />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;