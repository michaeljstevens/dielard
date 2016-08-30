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

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>
					{ this.props.formType === "login" ? "Login" : "Sign Up" }
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								onChange={this.updateState("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								onChange={this.updateState("password")}
								className="login-input" />
						</label>

						<br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default SessionForm;
