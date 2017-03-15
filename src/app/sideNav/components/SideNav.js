import React from 'react';
import SideNavHeader from './SideNavHeader';

const SideNav = ({max, sideNav, inputOnChange, changeHeaderTitle}) => (
    <div>
      <h4>{max}</h4>
      <SideNavHeader headerTitle={sideNav.headerTitle} />
      <button className="btn btn-primary" onClick={() => changeHeaderTitle()}>Update header</button>
      <input type="text" value={sideNav.inputVal} onChange={(e) => inputOnChange(e.target.value)} />
    </div>
)

export default SideNav;