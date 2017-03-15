export const ADD_TASK = 'ADD_TASK';

let nextTaskId = 0;

export const addTask = (text) => {
	return {
		type: ADD_TASK,
		id: nextTaskId++,
		name: text
	};
};