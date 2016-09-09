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
    this.eventListenerFunc = this.eventListenerFunc.bind(this);
    this.hasListener = false;
  }

  componentDidMount () {
    if(this.props.currentUser) {
      const el = document.getElementById("drop-down");
      const plus = document.getElementById("plus-id");

      if (el && plus && !this.hasListener) {
        window.addEventListener("click", this.eventListenerFunc, true);
        this.hasListener = true;
      }
    }
  }

  eventListenerFunc(e) {
    const el = document.getElementById("drop-down");
    const plus = document.getElementById("plus-id");

    if (e.target !== el && e.target !== plus) {
      this.setState({style: {display: 'none'}});
    }
  }

  componentDidUpdate () {

    const el = document.getElementById("drop-down");
    const plus = document.getElementById("plus-id");

    if(this.props.currentUser) {
      if (el && plus && !this.hasListener) {
        window.addEventListener("click", this.eventListenerFunc, true);
        this.hasListener = true;
      }
    } else {
      window.removeEventListener("click", this.eventListenerFunc, true);
      this.hasListener = false;
    }
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

  checkClickHandler () {

  }

  render () {

    if(this.props.currentUser) {
      this.checkClickHandler();
    }

    this.routesUrl = "/";
    this.exercisesUrl = "/";
    this.workoutsUrl = '/';
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
          <div>
            <img className="plus" id="plus-id" onClick={this.displayAddDropdown}
              src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472582322/plus_spuhvk.png" />
            <ul style={this.state.style} id="drop-down" className="nav-add-ul">
              <li onClick={this.clickLink.bind(this, newWorkoutUrl)}>New Workout</li>
              <li onClick={this.clickLink.bind(this, newRouteUrl)}>New Route</li>
              <li onClick={this.clickLink.bind(this, newExerciseUrl)}>New Exercise</li>
            </ul>
          </div>
          <li><Link to={profileUrl}><img className="header-profile-picture"
            src={this.props.currentUser.profile_picture}
            alt="" /></Link></li>
          <li>
          </li>
        </ul>
      );
    } else {
      let style = {display: 'hidden'};
      sessionButton = (<ul className="login-signup">
        <li><Link to="/login" onClick = {this.props.clearErrors} className="current">Login</Link></li>
        <li><Link to="/signup" onClick = {this.props.clearErrors} className="current">Sign up</Link></li>
      </ul>);
    }
    return(
      <div className="nav-header">
        <Link to="/"><img className="header-link-img" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473357234/logo_ucucfj.png" /></Link>
        {this.props.currentUser ? <Link to={this.workoutsUrl} className="header-options"><h2>my workouts</h2></Link> : null}
        {this.props.currentUser ? <Link to={this.routesUrl} className="header-options-routes"><h2>my routes</h2></Link> : null}
        {this.props.currentUser ? <Link to={this.exercisesUrl} className="header-options-exercises"><h2>my exercises</h2></Link> : null}
        <div>{sessionButton}</div>
      </div>
    );
  }
}

export default Navbar;
