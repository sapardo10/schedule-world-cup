import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
	render() {
		return (
			<div className="login col-sm-6">
				<form className="form-signin">
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				    <label htmlFor="inputEmail" class="sr-only">Email address</label>
				    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
				    <label htmlFor="inputPassword" class="sr-only">Password</label>
				    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
				    <button type="submit" class="loginBtn loginBtn--google">Login with Google</button>
			      
			    </form>
			</div>
		);
	}
}

export default Login;
