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
		const { errorMessage } = this.props.register;

		return (
			<div>
				<input type='text'
							 ref='username'
							 className="form-control form-control-solid placeholder-no-fix form-group"
							 placeholder='Username'
							 required
				/>
				<input type='email' 
							 ref='email'
							 className="form-control form-control-solid placeholder-no-fix form-group"
							 placeholder='Email'
							 required
				/>
				<input 
					type='password' 
					ref='password'
					className="form-control form-control-solid placeholder-no-fix form-group"
					placeholder='Password'
					required
				/>
				<input type='password'
							 ref='confirmPassword'
							 className="form-control form-control-solid placeholder-no-fix form-group"
							 placeholder='Confirm password'
							 required
				/>
				<button onClick={(event) => this.handleClick()} className="btn blue">
					Sign Up
				</button>

				{errorMessage &&
				<p>{errorMessage}</p>
				}

				<Link to={`/auth/login`}
							className="btn blue"
							style={{marginLeft: '10px'}}
				>
					Sign in
				</Link>
			</div>
		)
	}
}

export default Register;