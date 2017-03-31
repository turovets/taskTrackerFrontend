import {
	LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, USER_REQUEST, USER_SUCCESS, USER_FAILURE
} from '../actions';

const auth = (
	state = {
		isFetching: false,
		isAuthenticated: false
	}, action
) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
				isFetching: true,
				isAuthenticated: false,
				user: action.creds
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
				isFetching: false,
				isAuthenticated: true,
				errorMessage: ''
      };

    case LOGIN_FAILURE:
      return {
				...state,
				isFetching: false,
				isAuthenticated: false,
				errorMessage: action.message
      };

    case LOGOUT_SUCCESS:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false
			};

		case USER_REQUEST:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false,
			};

		case USER_SUCCESS:
			return {
				...state,
				isFetching: false,
				isAuthenticated: true,
				user: action.user
			};

		case USER_FAILURE:
			return {
				...state,
				isFetching: false,
				isAuthenticated: false,
				errorMessage: action.message
			};

    default:
      return state
  }
};
export default auth