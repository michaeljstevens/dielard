import React from 'react';
import { hashHistory } from 'react-router';
import StatsContainer from '../stats/stats_container.js';

class UserProfileIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.gotoEdit = this.gotoEdit.bind(this);
  }

  gotoEdit() {
    hashHistory.push(`/users/${this.props.currentUser.id}/edit`);
  }

  render() {
    return(
      <div className="profile-show-outer">
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473397322/photo-1440614260594-46a6c82e8f4c_zdfcug.jpg" alt=""/>
        <div className="profile-show">
          <div className="content">
            <div className="left-content">
              {this.props.currentUser ? <img src={this.props.currentUser.profile_picture} className="profile-picture" /> : null}
              {this.props.currentUser ? <h1 className="usershow-header">{this.props.currentUser.username}</h1> : null}
              {this.props.currentUser ? <h2 className="usershow-description">{this.props.currentUser.description}</h2> : null}
              <button type="button" className="goto-edit-button" onClick={this.gotoEdit}>
                Update Profile
              </button>
            </div>
            <div className="right-content">
              <ul className="user-display-info-head">
                <li>DOB</li>
                <li>Sex</li>
                <li>Height(inches)</li>
                <li>Weight(pounds)</li>
                <li>Activity Level</li>
                <li>Maintenance Calories</li>
              </ul>
              <div className="v-line"></div>
              <ul className="user-display-info">
                {this.props.currentUser ? <li>{this.props.currentUser.birthdate}</li> : null}
                {this.props.currentUser ? <li>{this.props.currentUser.sex}</li> : null}
                {this.props.currentUser ? <li>{this.props.currentUser.height}</li> : null}
                {this.props.currentUser ? <li>{this.props.currentUser.weight}</li> : null}
                {this.props.currentUser ? <li>{this.props.currentUser.activity_level}</li> : null}
                {this.props.currentUser ? <li>{this.props.currentUser.daily_calories}</li> : null}
              </ul>
            </div>
          </div>
        </div>
        <StatsContainer pathName={this.props.location.pathname}/>
      </div>
    );
  }
}

export default UserProfileIndexItem;
