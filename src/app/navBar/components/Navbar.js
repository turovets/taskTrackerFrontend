import React from 'react'
import { Link } from 'react-router';
import Logout from '../../auth/containers/Logout';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className="page-header navbar navbar-fixed-top">
				<div className="page-header-inner ">

					<div className="page-logo">
						<Link to={`/dashboard`}
						   style={{textDecoration: 'none', fontSize: '24px', lineHeight: '75px'}}
						>
							TaskTracker
						</Link>
						<div className="menu-toggler sidebar-toggler">
						</div>
					</div>
					<a href="#" className="menu-toggler responsive-toggler"> </a>
					<div className="page-top">
						<form className="search-form" action="page_general_search_2.html" method="GET">
							<div className="input-group">
								<input type="text" className="form-control input-sm" placeholder="Search..." name="query"/>
								<span className="input-group-btn">
										<a href="" className="btn submit">
												<i className="icon-magnifier"></i>
										</a>
								</span>
							</div>
						</form>
						<div className="top-menu">
							<ul className="nav navbar-nav pull-right">
								<li className="separator hide"></li>
								<li className="dropdown dropdown-extended dropdown-notification dropdown-dark"
										id="header_notification_bar">
									<a href="#" className="dropdown-toggle">
										<i className="icon-bell"></i>
										<span className="badge badge-success"> 7 </span>
									</a>
									<ul className="dropdown-menu">
										<li className="external">
											<h3>
												<span className="bold">12 pending</span> notifications</h3>
											<a href="page_user_profile_1.html">view all</a>
										</li>
										<li>
											<ul className="dropdown-menu-list scroller" style={{height: '250px'}}>
												<li>
													<a href="#">
														<span className="time">just now</span>
														<span className="details">
															<span className="label label-sm label-icon label-success">
																	<i className="fa fa-plus"></i>
															</span> 
															New user registered.
														</span>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="separator hide"></li>
								<li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
									<a href="#" className="dropdown-toggle">
										<i className="icon-envelope-open"></i>
										<span className="badge badge-danger"> 4 </span>
									</a>
									<ul className="dropdown-menu">
										<li className="external">
											<h3>You have
												<span className="bold">7 New</span> Messages</h3>
											<a href="app_inbox.html">view all</a>
										</li>
									</ul>
								</li>
								<li className="separator hide"></li>
								<li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
									<a href="#" className="dropdown-toggle">
										<i className="icon-calendar"></i>
										<span className="badge badge-primary"> 3 </span>
									</a>
									<ul className="dropdown-menu extended tasks">
										<li className="external">
											<h3>You have
												<span className="bold">12 pending</span> tasks</h3>
											<a href="?p=page_todo_2">view all</a>
										</li>
									</ul>
								</li>
								<li className="dropdown dropdown-user dropdown-dark">
									<a href="#" className="dropdown-toggle dsadsaasd">
										<span className="username username-hide-on-mobile"> Nick </span>
										<img alt="" className="img-circle" src="assets/layouts/layout4/img/avatar9.jpg"/>
									</a>
									<ul className="dropdown-menu dropdown-menu-default">
										<li>
											<a href="page_user_profile_1.html">
												<i className="icon-user"></i> My Profile </a>
										</li>
										<li>
											<a href="app_calendar.html">
												<i className="icon-calendar"></i> My Calendar </a>
										</li>
										<li>
											<a href="app_inbox.html">
												<i className="icon-envelope-open"></i> My Inbox
												<span className="badge badge-danger"> 3 </span>
											</a>
										</li>
										<li>
											<a href="app_todo_2.html">
												<i className="icon-rocket"></i> My Tasks
												<span className="badge badge-success"> 7 </span>
											</a>
										</li>
										<li className="divider"></li>
										<li>
											<a href="page_user_lock_1.html">
												<i className="icon-lock"></i> Lock Screen </a>
										</li>
										<li>
											<a href="page_user_login_1.html">
												<i className="icon-key"></i> Log Out </a>
										</li>
									</ul>
								</li>
								<Logout/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Navbar;