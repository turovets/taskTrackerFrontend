import { connect } from 'react-redux';
import projectContainer from '../components/ProjectContainer';
import { getProjects } from '../actions';

const mapStateToProps = (state) => ({
	projects: state.projects.projectList
});

const mapDispatchToProps = {
	getProjects
};

let ProjectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectContainer);

export default ProjectContainer;