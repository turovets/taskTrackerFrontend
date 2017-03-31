import React from 'react';

class Auth extends React.Component {
  constructor(props) {
    super(props)
  }

	render() {


		return (
			<div>
				<div className="user-login-5">
					<div className="row bs-reset">
						<div className="col-md-6 login-container bs-reset">
							<img className="login-logo login-6" src="/assets/pages/img/login/login-invert.png" />
							<div className="login-content">
								<h1>Metronic Admin Login</h1>
								<p> Lorem ipsum dolor sit amet, coectetuer adipiscing elit sed diam nonummy et nibh euismod aliquam erat volutpat. Lorem ipsum dolor sit amet, coectetuer adipiscing. </p>
								{this.props.children}
							</div>
							<div className="login-footer">
								<div className="row bs-reset">
									<div className="col-xs-5 bs-reset">
										<ul className="login-social">
											<li>
												<a href="#">
													<i className="icon-social-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="icon-social-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="icon-social-dribbble"></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="col-xs-7 bs-reset">
										<div className="login-copyright text-right">
											<p>Copyright &copy; Keenthemes 2015</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 bs-reset">
							<div className="login-bg" style={{background: 'url(/assets/pages/img/login/bg2.jpg)'}}>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Auth;