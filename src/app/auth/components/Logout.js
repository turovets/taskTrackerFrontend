import React from 'react';
import { logoutUser } from '../actions';

let Logout = ({ logoutUser }) => {

	return (
			<button onClick={() => logoutUser()}>
				Logout
			</button>
	);
};
export default Logout;