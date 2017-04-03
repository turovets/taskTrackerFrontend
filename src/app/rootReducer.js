import { combineReducers } from 'redux'
import dashboard from './dashboard/reducers/index'
import task from './task/reducers/index'
import project from './project/reducers/index'
import auth from './auth/reducers/index'
import register from './register/reducers/index'

const rootReducer = combineReducers({
  dashboard,
  project,
  task,
  auth,
  register
});

export default rootReducer