import { ADD_TASK, GET_TASK_SUCCESS } from '../actions'
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

		case GET_TASK_SUCCESS: {
			return {
				...state,
				taskList: action.tasks
			}
		}

		default:
			return state;
	}
};
export default tasks