import Request from '../../request'

export const ADD_PROJECT = 'ADD_PROJECT';
export const GET_PROJECTS_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECT_SUCCESS';
let nextProjectId = 0;

export const addProject = (text) => {
	return {
		type: ADD_PROJECT,
		id: nextProjectId++,
		name: text
	};
};

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
	const project = state.project;
	if (!project.projects.length) {
		return true
	} else if (project.isFetching) {
		return false
	}
}

export function fetchProjectsIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchProjects(getState())) {
			return dispatch(getProjects())
		}
	}
}