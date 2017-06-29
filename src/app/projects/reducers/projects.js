import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS_SUCCESS } from '../actions';
import { GET_PROJECT_TASKS_SUCCESS } from '../../tasks/actions';
import project from './project'

const projects = (
	state = {
		projectList: [],
		isFetching: false
	},
	action
) => {
	switch (action.type) {

		case GET_PROJECTS_SUCCESS: {
			return {
				...state,
				projectList: action.projectList
			}
		}

		case GET_PROJECT_TASKS_SUCCESS: {
			let projectList = [...state.projectList];
			
			projectList.map((item) => { if (item.id === action.projectId) { return item.tasks = action.tasks } });
			
			return {
				...state,
				projectList
			}
		}

		case ADD_PROJECT:
			let projectList = [...state.projectList];

			projectList.push(
				project(undefined, action)
			);

			return {
				...state,
				projectList
			};

		case DELETE_PROJECT:
			let projectListForDel = [...state.projectList];

			let updatedProjectList = projectListForDel.filter( project => {
				return project.id !== action.projectId
			});

			return {
				...state,
				projectList: updatedProjectList
			};

		default:
			return state
	}
};
export default projects