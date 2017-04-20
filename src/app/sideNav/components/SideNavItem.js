import React from 'react';
import { Link } from 'react-router';

const SideNavItem = ({ title, linkUrl, isActive }) => {

	const activeClassName = isActive() ? 'nav-item start active' : 'nav-item start ';
	let iconClass;

	switch (linkUrl) {
		case 'dashboard':
			iconClass = 'icon-home';
			break;
		case 'projects':
			iconClass = 'icon-layers';
			break;
		case 'account':
			iconClass = 'icon-user';
			break;
		default:
			iconClass = 'icon-folder';
	}

	return (
		<li className={activeClassName}>
			<Link to={linkUrl}
			      className="nav-link nav-toggle ">
				<i className={ iconClass }></i>
				<span className="title">{title}</span>
				<span className="selected"></span>
			</Link>
		</li>
	)
};

export default SideNavItem;