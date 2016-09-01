import React from 'react';
import { hashHistory } from 'react-router';

class UserProfileIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
    this.gotoEdit = this.gotoEdit.bind(this);
  }

  gotoEdit() {
    hashHistory.push(`/users/${this.currentUser.id}/edit`);
  }

  render() {
    return(
      <div>
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472691299/photo-1415394171664-b29caa4dca77_nujfnv.png" alt=""/>
        <div className="profile-show">
          <div className="content">
            <div className="left-content">
              <img src={this.currentUser.profile_picture} className="profile-picture" />
              <h1 className="usershow-header">{this.currentUser.username}</h1>
            </div>
            <div className="right-content">
              <ul className="user-display-info">
                <li>{this.currentUser.description}</li>
                <li>{this.currentUser.birthdate}</li>
                <li>{this.currentUser.sex}</li>
                <li>Height(inches): {this.currentUser.height}</li>
                <li>Weight(pounds): {this.currentUser.weight}</li>
                <li>Activity Level: {this.currentUser.activity_level}</li>
                <li>Estimated Daily Caloric Expenditure: {this.currentUser.daily_calories}</li>
              </ul>
              <button type="button" className="goto-edit-button" onClick={this.gotoEdit}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileIndexItem;
