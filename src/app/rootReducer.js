import { combineReducers } from 'redux'
import tasks from './tasks/reducers/tasks'
import projects from './projects/reducers/projects'
import auth from './auth/reducers/index'
import register from './register/reducers/index'

const rootReducer = combineReducers({
  projects,
  tasks,
  auth,
  register
});

export default rootReducer