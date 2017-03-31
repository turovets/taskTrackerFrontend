import { GET_TASK, GET_USER_DATA } from '../actions';
import { ADD_TASK } from '../../task/actions';

const dashboard = (
  state = {
    tasks: [],
		userData: [],
		isFetching: false
  },
  action
) => {
  switch (action.type) {

		case GET_USER_DATA: {
			return {
				...state,
				userData: action.userData
			}
		}

    case GET_TASK: {
      return {
				...state,
        tasks: action.tasks
      }
    }

    case ADD_TASK:
			let tasks = [...state.tasks];

			tasks.push({
				id: action.id,
				name: action.name,
				description: action.description,
				dueDate: action.dueDate,
				status: action.status
			});

			return {
				...state,
				tasks
			};

    default:
      return state
  }
};
export default dashboard