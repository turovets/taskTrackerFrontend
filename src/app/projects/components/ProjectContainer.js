import React from 'react';
import ProjectForm from './ProjectForm'

let Project = ({ }) => {

	return (
		<div className="page-content-wrapper">
			<div className="page-content">
				<div className="col-lg-6">
					<div className="portlet light portlet-fit bordered">
						<div className="portlet-title">
							<div className="caption">
								<i className=" icon-layers font-green"></i>
								<span className="caption-subject font-green bold uppercase">To Do List</span>
								<div className="caption-desc font-grey-cascade"> Default list element style. Activate by adding <pre className="mt-code">.list-todo</pre> className to the <pre className="mt-code">ul</pre> element. </div>
							</div>
						</div>
						<div className="portlet-body">
							<div className="mt-element-list">
								<div className="mt-list-head list-todo red">
									<div className="list-head-title-container">
										<h3 className="list-title">My Projects</h3>
										<div className="list-head-count">
											<div className="list-head-count-item">
												<i className="fa fa-check"></i> 15</div>
											<div className="list-head-count-item">
												<i className="fa fa-cog"></i> 34</div>
										</div>
									</div>
									<a href="#">
										<div className="list-count pull-right red-mint">
											<i className="fa fa-plus"></i>
										</div>
									</a>
								</div>
								<div className="mt-list-container list-todo" id="accordion1" role="tablist" aria-multiselectable="true">
									<div className="list-todo-line"></div>
									<ul>
										<li className="mt-list-item">
											<div className="list-todo-icon bg-white">
												<i className="fa fa-database"></i>
											</div>
											<div className="list-todo-item dark">
												<a className="list-toggle-container" data-toggle="collapse" data-parent="#accordion1" href="#task-1" aria-expanded="false">
													<div className="list-toggle done uppercase">
														<div className="list-toggle-title bold">Metronic Database</div>
														<div className="badge badge-default pull-right bold">3</div>
													</div>
												</a>
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
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
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
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
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
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
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
											</div>
										</li>
										<li className="mt-list-item">
											<div className="list-todo-icon bg-white">
												<i className="fa fa-paint-brush"></i>
											</div>
											<div className="list-todo-item dark">
												<a className="list-toggle-container" data-toggle="collapse" data-parent="#accordion1" href="#task-2" aria-expanded="false">
													<div className="list-toggle done uppercase">
														<div className="list-toggle-title bold">Creative Artwork</div>
														<div className="badge badge-default pull-right bold">3</div>
													</div>
												</a>
												<div className="task-list panel-collapse collapse" id="task-2">
													<ul>
														<li className="task-list-item done">
															<div className="task-icon">
																<a href="#">
																	<i className="fa fa-file-image-o"></i>
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
																	<a href="#">Concept Design</a>
																</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
															</div>
														</li>
														<li className="task-list-item done">
															<div className="task-icon">
																<a href="#">
																	<i className="fa fa-star-half-o"></i>
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
																	<a href="#">Creative Optimization</a>
																</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
															</div>
														</li>
														<li className="task-list-item">
															<div className="task-icon">
																<a href="#">
																	<i className="fa fa-thumbs-o-up"></i>
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
																	<a href="#">Visual Proofing</a>
																</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
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
											</div>
										</li>
										<li className="mt-list-item">
											<div className="list-todo-icon bg-white">
												<i className="fa fa-sticky-note-o"></i>
											</div>
											<div className="list-todo-item dark">
												<a className="list-toggle-container font-white" data-toggle="collapse" data-parent="#accordion1" href="#task-3" aria-expanded="false">
													<div className="list-toggle done uppercase">
														<div className="list-toggle-title bold">Content Development</div>
														<div className="badge badge-default pull-right bold">2</div>
													</div>
												</a>
												<div className="task-list panel-collapse collapse" id="task-3">
													<ul>
														<li className="task-list-item done">
															<div className="task-icon">
																<a href="#">
																	<i className="fa fa-navicon"></i>
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
																	<a href="#">Artwork Slicing</a>
																</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
															</div>
														</li>
														<li className="task-list-item">
															<div className="task-icon">
																<a href="#">
																	<i className="fa fa-cube"></i>
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
																	<a href="#">Backend Integration</a>
																</h4>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
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
											</div>
										</li>
									</ul>
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
};
export default Project;