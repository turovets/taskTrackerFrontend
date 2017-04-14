import Request from '../../request'
import { v4 } from 'node-uuid'

export const ADD_TASK = 'ADD_TASK';
export const GET_TASK = 'GET_TASK';

export const addTask = (task) => ({
	type: ADD_TASK,
	id: v4(),
	name: task.title,
	description: task.description,
	dueDate: task.dueDate,
	status: task.status
});

export const getTasks = () => (dispatch) => {
	Request.get('/api/tasks')
		.then(tasks => {
			dispatch({
				type: 'GET_TASK',
				tasks: tasks
			})
		})
};

function shouldFetchTasks(state) {
	const { tasks } = state;
	if (!tasks.taskList.length) {
		return true
	} else if (tasks.isFetching) {
		return false
	}
}

export const fetchTasksIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchTasks(getState())) {
			return dispatch(getTasks())
		}
	}
};