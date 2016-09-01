import React from 'react';
import {hashHistory, Link} from 'react-router';

const ACTIVITY_CONSTANTS = {
  "None": 1.2,
  "Light": 1.375,
  "Moderate": 1.55,
  "High": 1.725,
  "Extreme": 1.9
};


class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = props.currentUser;
    this.state = {
      id: this.currentUser.id,
      username: this.currentUser.username,
      profile_picture: this.currentUser.profile_picture,
      description: this.currentUser.description,
      birthdate: this.currentUser.birthdate,
      sex: this.currentUser.sex,
      height: this.currentUser.height,
      weight: this.currentUser.weight,
      activity_level: this.currentUser.activity_level,
      daily_calories: this.currentUser.daily_calories
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.setCalories = this.setCalories.bind(this);
    this.calculateBmr = this.calculateBmr.bind(this);
    this.years = this.years.bind(this);
  }

  updateState(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  upload(e){
    e.preventDefault();
    let that = this;
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, image) {
        if (error === null) {
          const w = image[0].width >= 3000 ? 1800 : 1200;
          const h = image[0].height >= 3000 ? 1800 : 1200;
          const url = `http://res.cloudinary.com/dj6gqauyi/image/upload/w_${w},h_${h},c_crop,g_face,r_max/w_200/${image[0].path}`;
          that.setState({profile_picture: url});
        }
        console.log(that.state);
      }
    );
  }

  setCalories() {
    if(!this.state.activity_level || !this.state.sex || !this.state.weight || !this.state.height || !this.state.birthdate) {
      return null;
    }
    const calories = (this.calculateBmr() * ACTIVITY_CONSTANTS[this.state.activity_level]);
    this.state.daily_calories = calories;
  }

  calculateBmr() {
    if(this.state.sex == "Male") {
      return (66 + (6.23 * this.state.weight) + (12.7 * this.state.height) - (6.8 * this.years()));
    } else {
      return (655 + ( 4.35 * this.state.weight ) + ( 4.7 * this.state.height ) - ( 4.7 * this.years()));
    }
  }

  years() {
    const year1 = new Date(this.state.birthdate).getFullYear();
    const year2 = new Date().getFullYear();
    return(year2 - year1);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setCalories();
    const user = this.state;
    this.props.updateUser({user});
  }

  render() {
    let linkUrl = `/users/${this.currentUser.id}`;
    return (
      <div className="profile-form">
        <h1 className="user-edit-header">Edit Profile</h1>
        <div className="h-line"></div>
        <form onSubmit={this.handleSubmit} className="profile-form-box">
          <br />

          <div className="profile-picture-parts">
            <img src={this.state.profile_picture} className="edit-profile-picture" />
            <img className="plus-profile-picture" onClick={this.upload} src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472582322/plus_spuhvk.png" />
          </div>
          <br />

          <div className="update-inputs">
            <div className="update-field">
            <label className="field-label">Username</label>
            <input type="text"
              onChange={this.updateState("username")}
              className="update-input" placeholder={this.state.username} />
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Description</label>
              <input type="text"
                onChange={this.updateState("description")}
                className="update-input" placeholder={this.state.description} />
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Birthdate</label>
              <input type="date"
                onChange={this.updateState("birthdate")}
                className="update-input" />
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Sex</label>
              <select onChange={this.updateState("sex")} className="update-select">
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Height (inches)</label>
              <input type="text"
                onChange={this.updateState("height")}
                className="update-input" placeholder={this.state.height} />
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Weight (pounds)</label>
              <input type="text"
                onChange={this.updateState("weight")}
                className="update-input" placeholder={this.state.weight} />
            </div>
            <br />
            <div className="update-field">
              <label className="field-label">Activity Level</label>
              <select onChange={this.updateState("activity_level")} className="update-select">
                <option value=""></option>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
              </select>
            </div>
            <br />
            <input type="submit" className="update-submit" value="Update" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
