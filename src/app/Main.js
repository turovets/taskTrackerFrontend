import React, {Component} from 'react';
import { Link } from 'react-router';
import Navbar from './navBar/containers/Navbar';
import { getUser } from './auth/actions';
import { connect } from 'react-redux';
import SideNav from '../app/sideNav/components/SideNav';

class Main extends Component {
  constructor(props) {
    super(props);
  }

	componentWillMount() {
		this.props.getUser();
  }

  render() {

    if (!this.props.auth.isAuthenticated) return null;

    return (
			<div>
        <Navbar />
				<div className="page-container">
					<SideNav />
        	{this.props.children}
				</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
};

const mapDispatchToProps = {
	getUser
};

Main = connect(
	mapStateToProps,
  mapDispatchToProps,
)(Main);

export default Main;
