import React from 'react';
import { Link } from 'react-router';
import { addTask } from '../actions';

let Task = ({ dispatch }) => {
	let input;

	return (
    <div>
      <input ref={node => {
				input = node;
			}} />
      <button onClick={() => {
				dispatch(addTask(input.value));
				input.value = '';
			}}>
        Add Task
      </button>
			<Link to={`/dashboard`}>dashboard</Link>
    </div>
	);
};
export default Task;