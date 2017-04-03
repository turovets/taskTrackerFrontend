import Request from '../../request'

export const ADD_TASK = 'ADD_TASK';
export const GET_TASK = 'GET_TASK';

let nextTaskId = 0;

export const addTask = (task) => {
	return {
		type: ADD_TASK,
		id: nextTaskId++,
		name: task.title,
		description: task.description,
		dueDate: task.dueDate,
		status: task.status
	};
};

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
	const task = state.task;
	if (!task.tasks.length) {
		return true
	} else if (task.isFetching) {
		return false
	}
}

export function fetchTasksIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchTasks(getState())) {
			return dispatch(getTasks())
		}
	}
}