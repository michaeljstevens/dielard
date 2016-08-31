import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.loginForm = this.loginForm.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	updateState(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	demoLogin(e) {
		e.preventDefault();
		const user = {username: "Jeff Goldblum", password: "password"};
		this.props.processForm({user});
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	loginForm() {
		return(<div className="login-form">
			<form onSubmit={this.handleSubmit} className="login-form-box">
				<br/>
				<label className="session-type">
					{ this.props.formType === "login" ? "Login" : "Sign Up" }
				</label>
				<label className="login-errors">{ this.renderErrors() }</label>
				<br />
				<div className="user-inputs">
					<br/>
					<input type="text"
						onChange={this.updateState("username")}
						className="login-input" placeholder="Username"/>
					<br />
					<br />
					<input type="password"
						onChange={this.updateState("password")}
						className="login-input" placeholder="Password" />
				</div>
				<br />
				<input type={this.props.formType === "login" ? "submit" : "hidden"}
					onClick={this.demoLogin} className="demo-button" value="Demo" />
				<input type="submit" className="session-submit" value="Submit" />
			</form>
		</div>);
	}

	render() {
		return (
			<div>
				<img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472591133/photo-1447185891480-252d7554aa8b_fv2kkk.jpg" alt=""/>
				{this.loginForm()}
			</div>
		);
	}

}

export default SessionForm;
