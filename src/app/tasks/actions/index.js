import Request from '../../request'
import { v4 } from 'node-uuid'

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const GET_TASK_REQUEST = 'GET_TASK_REQUEST';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_PROJECT_TASKS_SUCCESS = 'GET_PROJECT_TASKS_SUCCESS';

export const addTask = (task) => ({
	type: ADD_TASK,
	id: v4(),
	name: task.title,
	description: task.description,
	dueDate: task.dueDate,
	status: task.status
});

export const requestAddTask = () => ({
	type: ADD_TASK_REQUEST,
	isFetching: true
});

export const addTaskSuccess = (task) => ({
	type: ADD_TASK_SUCCESS,
	task: task,
	isFetching: false
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

export const receiveProjectTasks = (tasks) => ({
	type: GET_PROJECT_TASKS_SUCCESS,
	tasks: tasks,
	isFetching: false
});

export const addTaskServer = (task) => (dispatch) => {
	const task = {
		projectId: task.projectId,
		name: task.title,
		description: task.description,
	};

	dispatch(requestAddTask());
	Request.post('/api/tasks', task)
		.then( tasks => {
			dispatch(addTaskSuccess(tasks));
		})
};

export const getTasks = () => (dispatch) => {
	dispatch(requestGetTasks());
	Request.get('/api/tasks')
		.then( tasks => {
			dispatch(receiveTasks(tasks));
		})
};

export const getProjectTasks = (projectId) => (dispatch) => {
	Request.post('/api/tasks', {'projectId' : projectId})
		.then( tasks => {
			dispatch(receiveProjectTasks(tasks));
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