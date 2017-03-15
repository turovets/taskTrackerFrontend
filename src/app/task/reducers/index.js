import { ADD_TASK } from '../actions'

const task = (
	state = {
		tasks: []
	},
	action
) => {
	switch (action.type) {
		case ADD_TASK:
			return [
				...state,
				{
					id: action.id,
					name: action.name,
				}
			];
		default:
			return state;
	}
};
export default task