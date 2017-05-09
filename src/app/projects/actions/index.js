import Request from '../../request'
import { v4 } from 'node-uuid'

export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';
export const GET_PROJECTS_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECT_SUCCESS';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const requestAddProject = () => ({
	type: ADD_PROJECT_REQUEST,
	isFetching: true
});

export const successAddProject = (project) => ({
	type: ADD_PROJECT,
	id: v4(),
	name: project.name,
	description: project.description
});

export const ErrorAddProject = (message) => ({
	type: ADD_PROJECT_FAILURE,
	isFetching: false
});

export const addProject = (project) => (dispatch) => {
	dispatch(requestAddProject());
	return Request.post('/api/projects', project)
		.then((response) => {
			dispatch(successAddProject(project));
		})
		.catch((err) => {
			dispatch(ErrorAddProject());
		})
};

export const requestGetProjects = () => ({
	type: GET_PROJECTS_REQUEST,
	isFetching: true
});

export const receiveProjects = (projects) => ({
	type: GET_PROJECTS_SUCCESS,
	projectList: projects.content,
	isFetching: false
});

export const getProjects = () => (dispatch) => {
	dispatch(requestGetProjects());
	Request.get('/api/projects/my/0/10')
		.then(projects => {
			dispatch(receiveProjects(projects));
		})
};

export const deleteProjectSuccess = (projectId) => ({
	type: DELETE_PROJECT,
	projectId
});

export const deleteProject = (projectId) => (dispatch) => {
	Request.delete('/api/projects', projectId)
		.then(res => {
			dispatch(deleteProjectSuccess(projectId));
		})
};

function shouldFetchProjects(state) {
	const { projects } = state;
	if (!projects.projectList.length) {
		return true
	} else if (projects.isFetching) {
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