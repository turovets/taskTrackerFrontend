import { ADD_TASK } from '../actions'

const task = (
	state = {
		tasks: []
	},
	action
) => {
	switch (action.type) {
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
			return state;
	}
};
export default task