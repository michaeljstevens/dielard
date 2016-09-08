import React from 'react';
import { Link, hashHistory } from 'react-router';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {display: 'none'}
    };
    this.clickLink = this.clickLink.bind(this);
    this.displayAddDropdown = this.displayAddDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  clickLink(loc) {
    this.setState({style: {display: 'none'}});
    hashHistory.push(loc);
  }

  displayAddDropdown() {
    if (this.state.style.display === 'none') {
      this.setState({style: {display: 'block'}});
    } else {
      this.setState({style: {display: 'none'}});
    }
  }

  handleLogout() {
    this.props.logout();
  }

  render () {
    this.routesUrl = "/";
    this.exercisesUrl = "/";
    let sessionButton;
    if (this.props.currentUser) {
      const newRouteUrl = `/users/${this.props.currentUser.id}/routes/new`;
      const newExerciseUrl = `/users/${this.props.currentUser.id}/exercises/new`;
      const newWorkoutUrl = `/users/${this.props.currentUser.id}/workouts/new`;
      this.routesUrl = `/users/${this.props.currentUser.id}/routes`;
      this.exercisesUrl = `/users/${this.props.currentUser.id}/exercises`;
      this.workoutsUrl = `/users/${this.props.currentUser.id}/workouts`;
      let profileUrl = `/users/${this.props.currentUser.id}/edit`;
      sessionButton = (
        <ul className="logout-profile">
          <li><button className="logout-button" onClick={this.handleLogout}>Log Out</button></li>
          <li><Link to={profileUrl}><img className="header-profile-picture"
            src={this.props.currentUser.profile_picture}
            alt="" /></Link></li>
          <li>
            <div>
              <img className="plus" onClick={this.displayAddDropdown}
                src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472582322/plus_spuhvk.png" />
              <ul style={this.state.style} className="nav-add-ul">
                <li onClick={this.clickLink.bind(this, newWorkoutUrl)}>New Workout</li>
                <li onClick={this.clickLink.bind(this, newRouteUrl)}>New Route</li>
                <li onClick={this.clickLink.bind(this, newExerciseUrl)}>New Exercise</li>
              </ul>
            </div>
          </li>
        </ul>
      );
    } else {
      sessionButton = (<ul className="login-signup">
        <li><Link to="/login" onClick = {this.props.clearErrors} className="current">Login</Link></li>
        <li><Link to="/signup" onClick = {this.props.clearErrors} className="current">Sign up</Link></li>
      </ul>);
    }
    return(
      <div className="nav-header">
        <Link to="/" className="header-link"><h1>takeupless</h1></Link>
        <Link to={this.workoutsUrl} className="header-options"><h2>my workouts</h2></Link>
        <Link to={this.routesUrl} className="header-options-routes"><h2>my routes</h2></Link>
        <Link to={this.exercisesUrl} className="header-options-exercises"><h2>my exercises</h2></Link>
        <div>{sessionButton}</div>
      </div>
    );
  }
}

export default Navbar;
