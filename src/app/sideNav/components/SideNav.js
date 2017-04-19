import React from 'react';
import { Link } from 'react-router';

const SideNav = ({headerTitle}) => (
  <div className="page-sidebar-wrapper">
    <div className="page-sidebar navbar-collapse collapse">
      <ul className="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
        <li className="nav-item start active">
          <Link to={`/dashboard`}
                className="nav-link nav-toggle">
            <i className="icon-home"></i>
            <span className="title">Dashboard</span>
            <span className="selected"></span>
          </Link>
        </li>
        <li className="nav-item">
            <Link to={`/projects`}
                  className="nav-link nav-toggle">
              <i className="icon-layers"></i>
              <span className="title">Projects</span>
              <span className="selected"></span>
            </Link>
        </li>
        <li className="nav-item">
          <Link to={`/account`}
                className="nav-link nav-toggle">
            <i className="icon-user"></i>
            <span className="title">Account</span>
            <span className="selected"></span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default SideNav;