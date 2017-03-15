import React from 'react'
import Logout from '../../auth/containers/Logout';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

	render() {

		return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">taskTrackerApp</a>
          <div className='navbar-form'>
						<Logout />
          </div>
        </div>
      </nav>
		)
	}
}

export default Navbar;