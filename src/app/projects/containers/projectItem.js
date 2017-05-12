import { connect } from 'react-redux';
import projectItem from '../components/ProjectItem';
import { sendEmailDeleteProject, deleteProject } from '../actions';
import { getProjectTasks } from '../../tasks/actions';

const mapStateToProps = (state) => ({
	projects: state.projects.projectList
});

const mapDispatchToProps = {
	getProjectTasks,
	sendEmailDeleteProject,
	deleteProject
};

let ProjectItem = connect(
	mapStateToProps,
	mapDispatchToProps
)(projectItem);

export default ProjectItem;