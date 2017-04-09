import React from 'react';

const SideNav = ({headerTitle}) => (
  <div className="page-sidebar-wrapper">
    <div className="page-sidebar navbar-collapse collapse">
      <ul className="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
        <li className="nav-item start active">
          <a href="#" className="nav-link nav-toggle">
            <i className="icon-home"></i>
            <span className="title">Dashboard</span>
            <span className="selected"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link nav-toggle">
            <i className="icon-layers"></i>
            <span className="title">Projects</span>
            <span className="selected"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link nav-toggle">
            <i className="icon-user"></i>
            <span className="title">Account</span>
            <span className="selected"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SideNav;