import React from 'react';
import { Link } from 'react-router';

const SideNavItem = ({ title, linkUrl, isActive }) => {

	const activeClassName = isActive() ? 'nav-item start active' : 'nav-item start ';
	return (
		<li className={activeClassName}>
			<Link to={linkUrl}
			      className="nav-link nav-toggle ">
				<i className="icon-home"></i>
				<span className="title">{title}</span>
				<span className="selected"></span>
			</Link>
		</li>
	)
};

export default SideNavItem;