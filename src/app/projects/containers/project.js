import { connect } from 'react-redux';
import projectContainer from '../components/ProjectContainer';
import { addProject } from '../actions'

const mapStateToProps = (state) => ({
	projects: state.projects
});

const mapDispatchToProps = {
	addProject
};

let ProjectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectContainer);

export default ProjectContainer