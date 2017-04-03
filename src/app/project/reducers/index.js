import { ADD_PROJECT, GET_PROJECTS_SUCCESS } from '../actions';

const project = (
	state = {
		projects: [],
		isFetching: false
	},
	action
) => {
	switch (action.type) {

		case GET_PROJECTS_SUCCESS: {
			return {
				...state,
				projects: action.projects.content
			}
		}

		case ADD_PROJECT:
			let projects = [...state.projects];

			projects.push({
				id: action.id,
				name: action.name,
				description: action.description,
				dueDate: action.dueDate,
				status: action.status
			});

			return {
				...state,
				projects
			};

		default:
			return state
	}
};
export default project