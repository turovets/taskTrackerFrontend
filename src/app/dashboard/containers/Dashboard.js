import { connect } from 'react-redux';
import { fetchTasksIfNeeded, getUserData } from '../actions'
import dashboardPage from '../components/dashboardPage'

const mapStateToProps = (state) => {
  return {
		dashboard: state.dashboard,
		max: 'msadsadax'
	}
};

const mapDispatchToProps = {
	fetchTasksIfNeeded,
	getUserData
};

let Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboardPage);

export default Dashboard