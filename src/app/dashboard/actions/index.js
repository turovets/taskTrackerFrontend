import Request from '../../request'

export const GET_TASK = 'GET_TASK';
export const GET_USER_DATA = 'GET_USER_DATA';

export const getTasks = () => (dispatch) => {
	Request.get('/api/tasks')
		.then(tasks => {
			dispatch({
				type: 'GET_TASK',
				tasks: tasks
			})
		})
};

export const getUserData = () => (dispatch) => {
	Request.get('/api/users/me')
		.then(userData => {
			dispatch({
				type: 'GET_USER_DATA',
				userData
			})
		})
};

function shouldFetchPosts(state) {
	const dashboard = state.dashboard;
	if (!dashboard.tasks.length) {
		return true
	} else if (dashboard.isFetching) {
		return false
	}
}

export function fetchTasksIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchPosts(getState())) {
			return dispatch(getTasks())
		}
	}
}