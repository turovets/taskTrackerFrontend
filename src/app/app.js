import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Request from './request'
import Dashboard from './dashboard/containers/dashboard';
import Task from './task/containers/task';
import Main from './Main';
import Login from './auth/containers/Login';
import Register from './register/containers/Register';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);



const requireCredentials = (nextState, replace, next) => {

	Request.get('/api/users/me')
		.then(response => next())
		.catch((err) => {
			replace({
				pathname: '/login',
				state: {nextPathname: nextState.location.pathname}
			});
			next();
		});
};

render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Main} onEnter={requireCredentials}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="task" component={Task} />
      </Route>
      <Route path="login" component={Login} />
			<Route path="/register" component={Register} />
    </Router>
  </Provider>,
  document.getElementById('app'));
