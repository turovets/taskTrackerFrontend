import React from 'react';
import { logoutUser } from '../actions';

let Logout = ({ logoutUser }) => {

	return (
			<li onClick={() => logoutUser()} className="dropdown dropdown-extended quick-sidebar-toggler">
				<span className="sr-only">Toggle Quick Sidebar</span>
				<i className="icon-logout"></i>
			</li>
	);
};
export default Logout;