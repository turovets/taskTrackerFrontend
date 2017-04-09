import { connect } from 'react-redux';
import { loginUser } from '../actions'
import loginForm from '../components/login'

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = {
	loginUser
};

let login = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);

export default login