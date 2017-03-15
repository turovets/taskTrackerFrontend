import { connect } from 'react-redux';
import navbar from '../components/Navbar'

const mapStateToProps = (state) => {
  return {
		navbar: state.navbar
	}
};

const mapDispatchToProps = {

};

let Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(navbar);

export default Navbar