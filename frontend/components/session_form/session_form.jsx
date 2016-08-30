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
				<img className="splash-image" src="https://hd.unsplash.com/photo-1447185891480-252d7554aa8b" alt=""/>
				<div className="login-form">
						<form onSubmit={this.handleSubmit} className="login-form-box">
							<br/>
							{ this.props.formType === "login" ? "Login" : "Sign Up" }
							{ this.renderErrors() }
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
					</form>
					</div>
			</div>
		);
	}

}

export default SessionForm;
