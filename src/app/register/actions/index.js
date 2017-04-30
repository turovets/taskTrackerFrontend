import { browserHistory } from 'react-router'
import Request from '../../request'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const requestRegister = () => ({
	type: REGISTER_REQUEST,
	isFetching: true
});

export const registerSuccess = (user) => ({
	type: REGISTER_SUCCESS,
	isFetching: false
});

export const registerError = (errorMessage) => ({
	type: REGISTER_FAILURE,
	isFetching: false,
	errorMessage: 'Error! Try again'
});

export const registerUser = (creds) => {

	let params = {
		'email': creds.email,
		'name': creds.name,
		'password': creds.password,
		'confirmPassword': creds.confirmPassword
	};

	return dispatch => {
		dispatch(requestRegister());
		return Request.post('/api/users', params)
			.then((user) => {
				dispatch(registerSuccess(user));
				browserHistory.push('/auth/login');
			})
			.catch((err) => {
				dispatch(registerError(err));
				console.log(err);
			})
	}
};