import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button, Tooltip } from 'react-bootstrap';
import SideNav from './sideNav/containers/SideNav';
import Navbar from './navBar/containers/Navbar';

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container">
        <Navbar />

        {this.props.children}

        <Link to={`/dashboard`}>dashboard</Link>
      </div>
    );
  }
}

export default Main;
