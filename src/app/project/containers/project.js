import { connect } from 'react-redux';
import projectContainer from '../components/ProjectContainer';
import { addProject } from '../actions'

function mapStateToProps (state) {
	return {
		project: state.project,
	}
}

const mapDispatchToProps = {
	addProject
};

let ProjectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectContainer);

export default ProjectContainer

