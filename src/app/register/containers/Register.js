import { connect } from 'react-redux';
import { registerUser } from '../actions'
import registerForm from '../components/register'

const mapStateToProps = (state) => ({
	register: state.register
});

const mapDispatchToProps = {
	registerUser
};

let register = connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);

export default register