import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

	handleClick (e) {
  	e.preventDefault();
		const username = this.refs.username;
		const password = this.refs.password;
		const creds = {
			username: username.value.trim(),
			password: password.value.trim()
		};
		this.props.loginUser(creds);
	}

	render() {

		return (
			<div>
				<form action="#" className="login-form" method="post">
					{this.props.auth.errorMessage ?
						<div className="alert alert-danger display-hide">
							<span>{ this.props.auth.errorMessage }</span>
						</div>
						: null
					}
					<div className="row">
						<div className="col-xs-6">
							<input type='text'
										 ref='username'
										 placeholder='Username'
										 className="form-control form-control-solid placeholder-no-fix form-group"
										 name="username"
										 required
							/>
						</div>
						<div className="col-xs-6">
							<input type='password'
										 ref='password'
										 placeholder='Password'
										 className="form-control form-control-solid placeholder-no-fix form-group"
										 name="password"
										 required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<label className="rememberme mt-checkbox mt-checkbox-outline">
								<input type="checkbox" name="remember" value="1" /> Remember me
								<span></span>
							</label>
						</div>
						<div className="col-sm-8 text-right">
							<Link to={`/auth/register`}
										className="btn blue"
										style={{marginRight: '10px'}}
							>
								Sign up
							</Link>
							<button className="btn blue" type="submit" onClick={(event) => this.handleClick(event)}>Sign In</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Login;