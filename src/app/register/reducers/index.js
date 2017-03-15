import {
	REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
} from '../actions';

const register = (
	state = {
		isFetching: false,
		errorMessage: ''
	}, action
) => {
  switch (action.type) {

    case REGISTER_REQUEST:
      return {
        ...state,
				errorMessage: '',
				user: action.creds
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
				isFetching: false,
				errorMessage: ''
      };

    case REGISTER_FAILURE:
      return {
				...state,
				isFetching: false,
				errorMessage: action.errorMessage
      };

    default:
      return state
  }
};
export default register