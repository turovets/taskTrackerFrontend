import { connect } from 'react-redux';
import projectContainer from '../components/ProjectContainer';
import { getProjects } from '../actions';
import { getProjectTasks } from '../../tasks/actions';

const mapStateToProps = (state) => ({
	projects: state.projects.projectList
});

const mapDispatchToProps = {
	getProjects,
	getProjectTasks
};

let ProjectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectContainer);

export default ProjectContainer;