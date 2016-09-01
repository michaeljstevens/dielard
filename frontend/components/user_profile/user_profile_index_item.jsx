import React from 'react';
import { hashHistory } from 'react-router';

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
      <div>
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472691299/photo-1415394171664-b29caa4dca77_nujfnv.png" alt=""/>
        <div className="profile-show">
          <div className="content">
            <div className="left-content">
              <img src={this.props.currentUser.profile_picture} className="profile-picture" />
              <h1 className="usershow-header">{this.props.currentUser.username}</h1>
            </div>
            <div className="right-content">
              <ul className="user-display-info">
                <li>{this.props.currentUser.description}</li>
                <li>{this.props.currentUser.birthdate}</li>
                <li>{this.props.currentUser.sex}</li>
                <li>Height(inches): {this.props.currentUser.height}</li>
                <li>Weight(pounds): {this.props.currentUser.weight}</li>
                <li>Activity Level: {this.props.currentUser.activity_level}</li>
                <li>Estimated Daily Caloric Expenditure: {this.props.currentUser.daily_calories}</li>
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
