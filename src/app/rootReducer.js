import { combineReducers } from 'redux'
import dashboard from './dashboard/reducers/index'
import tasks from './tasks/reducers/tasks'
import projects from './projects/reducers/projects'
import auth from './auth/reducers/index'
import register from './register/reducers/index'

const rootReducer = combineReducers({
  dashboard,
  projects,
  tasks,
  auth,
  register
});

export default rootReducer