import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

	handleClick (event) {
		const username = this.refs.username;
		const password = this.refs.password;
		const creds = {
			username: username.value.trim(),
			password: password.value.trim()
		};
		this.props.loginUser(creds);
	}

	render() {
		const { errorMessage } = this.props;

		return (
			<div>
				<input type='text' ref='username' className="form-control" placeholder='Username'/>
				<input type='password' ref='password' className="form-control" placeholder='Password'/>
				<button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
					Sign In
				</button>
				<Link to={`/register`} className="btn btn-primary">Sign up</Link>

				{errorMessage &&
				<p>{errorMessage}</p>
				}
			</div>
		)
	}
}

export default Login;