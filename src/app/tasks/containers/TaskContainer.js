import { connect } from 'react-redux';
import TaskForm from '../components/TaskForm'
import { addTask } from '../actions';

const mapStateToProps = (state) => ({
	task: state.taskList
});

const mapDispatchToProps = {
	addTask
};

let TaskContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskForm);

export default TaskContainer