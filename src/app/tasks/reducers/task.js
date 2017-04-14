import { ADD_TASK } from '../actions'

const task = (
	state,
	action
) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				id: action.id,
				name: action.name,
				description: action.description,
				dueDate: action.dueDate,
				status: action.status
			};

		default:
			return state;
	}
};
export default task