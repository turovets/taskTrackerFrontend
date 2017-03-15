import { browserHistory } from 'react-router'
import Request from '../../request'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const requestRegister = (creds) => {
	return {
		type: REGISTER_REQUEST,
		isFetching: true,
		creds
	}
};

export const receiveRegister = (user) => {
	return {
		type: REGISTER_SUCCESS,
		isFetching: false,
	}
};

export const registerError = (errorMessage) => {
	return {
		type: REGISTER_FAILURE,
		isFetching: false,
		errorMessage: 'Error! Try again!'
	}
};

export function registerUser(creds) {

	let params = {
		'email': creds.email,
		'name': creds.name,
		'password': creds.password,
		'confirmPassword': creds.confirmPassword
	};

	return dispatch => {
		dispatch(requestRegister(creds));
		return Request.post('/api/users', params)
			.then((user) => {
				dispatch(receiveRegister(user));
				browserHistory.push('/login');
			})
			.catch((err) => {
				dispatch(registerError(err));
				console.log(err);
			})
	}
}