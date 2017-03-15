import { connect } from 'react-redux';
import SideNavComponent from '../components/SideNav'
import { inputOnChange, changeHeaderTitle } from '../actions'


const mapDispatchToProps = {
  inputOnChange,
  changeHeaderTitle
};

const mapStateToProps = (state) => {
  return {
    sideNav: state.sideNav,
		max: 'msadsadax'
}
};

let SideNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavComponent);

export default SideNav