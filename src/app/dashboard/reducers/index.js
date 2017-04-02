import { GET_TASK, GET_USER_DATA } from '../actions';
import { ADD_TASK } from '../../task/actions';
import { ADD_PROJECT, GET_PROJECTS_SUCCESS } from '../../project/actions';

const dashboard = (
  state = {
    projects: [], 
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

	  case GET_PROJECTS_SUCCESS: {
		  return {
			  ...state,
			  projects: action.projects
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

	  case ADD_PROJECT:
		  let projects = [...state.projects];

		  projects.push({
			  id: action.id,
			  name: action.name,
			  description: action.description,
			  dueDate: action.dueDate
		  });

		  return {
			  ...state,
			  projects
		  };

	  default:
      return state
  }
};
export default dashboard