import { connect } from 'react-redux';
import { logoutUser } from '../actions'
import logoutBtn from '../components/logout'

const mapStateToProps = (state) => {
  return {
		auth: state.auth
	}
};

const mapDispatchToProps = {
	logoutUser
};

let logout = connect(
	mapStateToProps,
	mapDispatchToProps
)(logoutBtn);

export default logout