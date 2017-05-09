import { connect } from 'react-redux';
import { fetchProjectsIfNeeded } from '../../projects/actions'
import { fetchTasksIfNeeded } from '../../tasks/actions'
import dashboardPage from '../components/dashboardPage'

const mapStateToProps = (state) => ({
	projects: state.projects,
	tasks: state.tasks
});

const mapDispatchToProps = {
	fetchTasksIfNeeded,
	fetchProjectsIfNeeded
};

let Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboardPage);

export default Dashboard