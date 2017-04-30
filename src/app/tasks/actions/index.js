import Request from '../../request'
import { v4 } from 'node-uuid'

export const ADD_TASK = 'ADD_TASK';
export const GET_TASK_REQUEST = 'GET_TASK_REQUEST';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';

export const addTask = (task) => ({
	type: ADD_TASK,
	id: v4(),
	name: task.title,
	description: task.description,
	dueDate: task.dueDate,
	status: task.status
});

export const requestGetTasks = () => ({
	type: GET_TASK_REQUEST,
	isFetching: true
});

export const receiveTasks = (tasks) => ({
	type: GET_TASK_SUCCESS,
	tasks: tasks,
	isFetching: false
});

export const getTasks = () => (dispatch) => {
	dispatch(requestGetTasks());
	Request.get('/api/tasks')
		.then( tasks => {
			dispatch(receiveTasks(tasks));
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