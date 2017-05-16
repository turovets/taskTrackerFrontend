import { combineReducers } from 'redux'
import tasks from './tasks/reducers/tasks'
import projects from './projects/reducers/projects'
import auth from './auth/reducers/index'
import register from './register/reducers/index'
import { LOGOUT_SUCCESS } from './auth/actions'

const appReducer = combineReducers({
  projects,
  tasks,
  auth,
  register
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action)
};

export default rootReducer