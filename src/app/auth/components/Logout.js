import React from 'react';

let Logout = ({ logoutUser }) => {

	return (
			<li onClick={() => logoutUser()} className="dropdown dropdown-extended quick-sidebar-toggler">
				<span className="sr-only">Toggle Quick Sidebar</span>
				<i className="icon-logout"></i>
			</li>
	);
};
export default Logout;