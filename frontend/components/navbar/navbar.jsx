import React from 'react';
import { Link, hashHistory } from 'react-router';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if (!this.props.loggedIn){
      hashHistory.push("/login");
    }
  }

  render () {
    this.routesUrl = "/";
    let sessionButton;
    if (this.props.currentUser) {
      this.routesUrl = `/users/${this.props.currentUser.id}/routes`;
      const routeBuildUrl = `/users/${this.props.currentUser.id}/routes/new`;
      let profileUrl = `/users/${this.props.currentUser.id}`;
      sessionButton = (
        <ul className="logout-profile">
          <li><button className="logout-button" onClick={this.props.logout}>Log Out</button></li>
          <li><Link to={profileUrl}><img className="header-profile-picture"
            src={this.props.currentUser.profile_picture}
            alt="" /></Link></li>
          <Link to={routeBuildUrl}><li><img className="plus" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472582322/plus_spuhvk.png" /></li></Link>
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
        <Link to={this.routesUrl} className="header-options"><h2>my routes</h2></Link>
        <div>{sessionButton}</div>
      </div>
    );
  }
}

export default Navbar;
