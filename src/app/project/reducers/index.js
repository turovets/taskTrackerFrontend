import { ADD_PROJECT } from '../actions'

const project = (
	state = {
		projects: []
	},
	action
) => {
	switch (action.type) {
		case ADD_PROJECT:
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
export default project