import { connect } from 'react-redux';
import project from '../components/Project';
import { addProject } from '../actions';


function mapStateToProps (state) {
	return {
		project: state.project
	}
}

const mapDispatchToProps = {
	addProject
};

let Project = connect(
	mapStateToProps,
	mapDispatchToProps
)(project);

export default Project

