import { connect } from 'react-redux';
import project from '../components/Project'

function mapStateToProps (state) {
	return {
		project: state.project
	}
}

let Project = connect(
	mapStateToProps
)(project);

export default Project

