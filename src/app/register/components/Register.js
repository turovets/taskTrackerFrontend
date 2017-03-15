import React from 'react';
import { Link } from 'react-router';

class Register extends React.Component {
  constructor(props) {
    super(props)
  }

	handleClick () {
		const username = this.refs.username;
		const email = this.refs.email;
		const password = this.refs.password;
		const confirmPassword = this.refs.confirmPassword;
		const creds = {
			email: email.value.trim(),
			name: username.value.trim(),
			password: password.value.trim(),
			confirmPassword: confirmPassword.value.trim()
		};
		this.props.registerUser(creds);
	}

	render() {
		const { errorMessage } = this.props;

		return (
			<div>
				<input type='text' ref='username' className="form-control" placeholder='Username'/>
				<input type='email' ref='email' className="form-control" placeholder='Email'/>
				<input type='password' ref='password' className="form-control" placeholder='Password'/>
				<input type='password' ref='confirmPassword' className="form-control" placeholder='Password'/>
				<button onClick={(event) => this.handleClick()} className="btn btn-primary">
					Sign Up
				</button>

				{errorMessage &&
				<p>{errorMessage}</p>
				}

				<Link to={`/login`}>Back to Login</Link>
			</div>
		)
	}
}

export default Register;