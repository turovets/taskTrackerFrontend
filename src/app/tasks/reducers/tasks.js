import { ADD_TASK } from '../actions'
import task from './task'

const tasks = (
	state = {
		taskList: []
	},
	action
) => {
	switch (action.type) {
		case ADD_TASK:
			let taskList = [...state.taskList];

			taskList.push(
				task(undefined, action)
			);

		return {
			...state,
			taskList
		};

		default:
			return state;
	}
};
export default tasks