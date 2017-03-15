import { connect } from 'react-redux';
import task from '../components/Task'

function mapStateToProps (state) {
	return {
		task: state.task
	}
}

let Task = connect(
	mapStateToProps
)(task);

export default Task

