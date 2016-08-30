import React from 'react';
import { Link } from 'react-router';


class Navbar extends React.Component {

  render () {
    let sessionButton;
    if (this.props.currentUser) {
      sessionButton = (
        <div className="logout-profile">
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
          <img className="header-profile-picture"
            src="https://www.picsofcelebrities.com/celebrity/jeff-goldblum/pictures/large/jeff-goldblum-2016.jpg"
            alt="" />
          <img className="plus" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472582322/plus_spuhvk.png" />
        </div>
      );
    } else {
      sessionButton = (<ul className="login-signup">
        <li><Link to="/login" className="current">Login</Link></li>
        <li><Link to="/signup" className="current">Sign up</Link></li>
      </ul>);
    }
    return(
      <div className="nav-header">
        <Link to="/" className="header-link"><h1>takeupless</h1></Link>
        <div>{sessionButton}</div>
      </div>
    );
  }
}

export default Navbar;
