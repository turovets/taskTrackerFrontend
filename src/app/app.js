import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import { Router, Route, browserHistory } from 'react-router';
import Dashboard from './dashboard/containers/dashboard';
import Task from './tasks/containers/TaskContainer';
import ProjectContainer from './projects/containers/ProjectContainer';
import Main from './Main';
import Auth from './auth/components/Auth';
import Login from './auth/containers/Login';
import Register from './register/containers/Register';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Main}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="task" component={Task} />
        <Route path="projects" component={ProjectContainer} />
      </Route>
      <Route path="/auth" component={Auth}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));