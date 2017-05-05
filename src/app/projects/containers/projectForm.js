import { connect } from 'react-redux';
import projectForm from '../components/ProjectForm';
import { addProject } from '../actions'

const mapStateToProps = (state) => ({
	projects: state.projects
});

const mapDispatchToProps = {
	addProject
};

let ProjectForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectForm);

export default ProjectForm