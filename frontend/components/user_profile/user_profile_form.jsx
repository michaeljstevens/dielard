import React from 'react';

class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_picture: "",
      description: "",
      birthdate: null,
      sex: "",
      height: null,
      weight: null,
      activity_level: "",
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.update({user});
  }

  render() {
    return (
      <div className="profile-form">
        <form onSubmit={this.handleSubmit} className="profile-form-box">
          <br />
          <div className="update-inputs">
            <input type="text"
              onChange={this.updateState("profile_picture")}
              className="update-input" placeholder="Picture" />
            <br />
            <input type="text"
              onChange={this.updateState("description")}
              className="update-input" placeholder="Description" />
            <br />
            <input type="date"
              onChange={this.updateState("birthdate")}
              className="update-input" />
            <br />
            <input type="text"
              onChange={this.updateState("sex")}
              className="update-input" placeholder="Sex" />
            <br />
            <input type="text"
              onChange={this.updateState("height")}
              className="update-input" placeholder="Height" />
            <br />
            <input type="text"
              onChange={this.updateState("weight")}
              className="update-input" placeholder="Weight" />
            <br />
            <input type="text"
              onChange={this.updateState("activity_level")}
              className="update-input" placeholder="Activity Level" />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
