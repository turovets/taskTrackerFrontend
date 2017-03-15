import { browserHistory } from 'react-router'
import Request from '../../request'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const requestLogin = (creds) => {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	}
};

export const receiveLogin = (user) => {
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		access_token: user.access_token
	}
};

export const loginError = (message) => {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
};


function requestLogout() {
	return {
		type: LOGOUT_REQUEST,
		isFetching: true,
		isAuthenticated: true
	}
}

function receiveLogout() {
	return {
		type: LOGOUT_SUCCESS,
		isFetching: false,
		isAuthenticated: false
	}
}

export function loginUser(creds) {

	let params = {
		'grant_type': 'password',
		'username': creds.username,
		'password': creds.password
	};

	return dispatch => {
		dispatch(requestLogin(creds));
		return Request.post('/api/login', params)
			.then((user) => {
				localStorage.setItem('access_token', user.access_token);
					dispatch(receiveLogin(user));
				browserHistory.push('/dashboard');
			})
			.catch((err) => {
				dispatch(loginError());
			})
	}
}

// Logs the user out
export function logoutUser() {
	return dispatch => {
		dispatch(requestLogout());
		localStorage.removeItem('access_token');
		dispatch(receiveLogout());
		browserHistory.push('/login');
	}
}