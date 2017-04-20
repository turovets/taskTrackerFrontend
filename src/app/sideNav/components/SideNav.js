import React from 'react';
import { Link } from 'react-router';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '',
		};
	}

	isLinkActive(url) {
		return this.props.location.pathname.indexOf(url) !== -1;
	}

	render() {

		return (
      <div className="page-sidebar-wrapper">
        <div className="page-sidebar navbar-collapse collapse">
          <ul className="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <SideNavItem title="Dashboard" linkUrl='dashboard' isActive={() => this.isLinkActive('dashboard')}/>
	          <SideNavItem title="Projects" linkUrl='projects' isActive={() => this.isLinkActive('projects')}/>
	          <SideNavItem title="Account" linkUrl='account' isActive={() => this.isLinkActive('account')}/>
          </ul>
        </div>
      </div>
		)
	}
}

export default SideNav;