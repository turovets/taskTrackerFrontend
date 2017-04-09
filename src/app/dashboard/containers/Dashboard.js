import { connect } from 'react-redux';
import { fetchProjectsIfNeeded } from '../../project/actions'
import { fetchTasksIfNeeded } from '../../task/actions'
import { getUserData } from '../actions'
import dashboardPage from '../components/dashboardPage'

const mapStateToProps = (state) => ({
	dashboard: state.dashboard,
	project: state.project,
	task: state.task
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