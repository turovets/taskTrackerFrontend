export const ADD_TASK = 'ADD_TASK';

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