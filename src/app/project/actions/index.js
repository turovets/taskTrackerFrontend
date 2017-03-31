export const ADD_PROJECT = 'ADD_PROJECT';

let nextProjectId = 0;

export const addProject = (text) => {
	return {
		type: ADD_PROJECT,
		id: nextProjectId++,
		name: text
	};
};