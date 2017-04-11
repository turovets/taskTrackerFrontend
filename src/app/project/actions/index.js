import Request from '../../request'
import { v4 } from 'node-uuid'

export const ADD_PROJECT = 'ADD_PROJECT';
export const GET_PROJECTS_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECT_SUCCESS';

export const addProject = (text) => ({
	type: ADD_PROJECT,
	id: v4(),
	name: text
});

// export const requestProjects = () => {
// 	return {
// 		type: GET_PROJECTS_REQUEST,
// 		isFetching: true
// 	}
// };
//
// export const receiveProjects = (projects) => {
// 	return {
// 		type: GET_PROJECTS_SUCCESS,
// 		isFetching: false,
// 		projects: projects
// 	}
// };

export const getProjects = () => (dispatch) => {
	Request.get('/api/projects/my/0/10')
		.then(projects => {
			dispatch({
				type: GET_PROJECTS_SUCCESS,
				projects: projects
			})
		})
};

function shouldFetchProjects(state) {
	const { project } = state;
	if (!project.projects.length) {
		return true
	} else if (project.isFetching) {
		return false
	}
}

export const fetchProjectsIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchProjects(getState())) {
			return dispatch(getProjects())
		}
	}
};