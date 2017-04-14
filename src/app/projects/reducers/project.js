import { ADD_PROJECT, GET_PROJECTS_SUCCESS } from '../actions';

const project = (
	state,
	action
) => {
	switch (action.type) {

		case ADD_PROJECT:
			return {
				id: action.id,
				name: action.name,
				description: action.description,
				dueDate: action.dueDate,
				status: action.status
			};

		default:
			return state
	}
};
export default project