import { browserHistory } from 'react-router'
import Request from '../../request'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const requestLogin = () => ({
	type: LOGIN_REQUEST,
	isFetching: true,
	isAuthenticated: false
});

export const receiveLogin = (user) => ({
	type: LOGIN_SUCCESS,
	isFetching: false,
	isAuthenticated: true,
	access_token: user.access_token
});

export const loginError = (message) => ({
	type: LOGIN_FAILURE,
	isFetching: false,
	isAuthenticated: false,
	message: 'Error! Try again'
});

export const logoutSuccess =() => ({
	type: LOGOUT_SUCCESS,
	isFetching: false,
	isAuthenticated: false
});

export const requestUserData = () => ({
	type: USER_REQUEST,
	isFetching: true,
	isAuthenticated: false
});

export const receiveUserData = (user) => ({
	type: USER_SUCCESS,
	isFetching: false,
	isAuthenticated: true,
	user
});

export const getUserDataError = () => ({
	type: USER_FAILURE,
	isFetching: false,
	isAuthenticated: false
});

export const loginUser = (creds) => (dispatch) => {
	let params = {
		'grant_type': 'password',
		'username': creds.username,
		'password': creds.password
	};

	dispatch(requestLogin());
	return Request.post('/api/login', params)
		.then((user) => {
			localStorage.setItem('access_token', user.access_token);
			dispatch(receiveLogin(user));
			browserHistory.push('/dashboard');
		})
		.catch((err) => {
			dispatch(loginError());
		})
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('access_token');
	dispatch(logoutSuccess());
	browserHistory.push('/auth/login');
};

export const getUser = () => (dispatch) => {
	dispatch(requestUserData());
	Request.get('/api/users/me')
		.then(user => {
			dispatch(receiveUserData(user));
		})
		.catch((err) => {
			dispatch(getUserDataError());
			browserHistory.push('/auth/login');
		});
};