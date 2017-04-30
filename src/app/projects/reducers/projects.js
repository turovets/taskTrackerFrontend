import { ADD_PROJECT, GET_PROJECTS_SUCCESS } from '../actions';
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

		case ADD_PROJECT:
			let projectList = [...state.projectList];

			projectList.push(
				project(undefined, action)
			);

			return {
				...state,
				projectList
			};

		default:
			return state
	}
};
export default projects