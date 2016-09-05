import React from 'react';
import TravelWorkoutFormContainer from './travel_workout_form_container.js';
import TravelWorkoutForm from './travel_workout_form.jsx';


class WorkoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.setButtonStyle = this.setButtonStyle.bind(this);
    this.state = {
      selectedButton: {className: 'WALKING'}};
    }

  componentDidMount () {
    this.origStyle = {background: "black", color: "white"};
  }

  setButtonStyle(e) {
    this.origStyle = {background: "white", color: "black"};
    if (this.state.selectedButton.style) {
      this.state.selectedButton.style.background = "white";
      this.state.selectedButton.style.color = "black";
      this.forceUpdate();
    }

    e.target.style.background="black";
    e.target.style.color="white";
    this.setState({selectedButton: e.target});
  }


  render() {
    return(
      <div className="workout-form-outer-container">
        <ul className="workout-form-selection-bar">
          <li className="WALKING" style={this.origStyle} onClick={this.setButtonStyle}>Walk</li>
          <li className="RUNNING" onClick={this.setButtonStyle}>Run</li>
          <li className="BICYCLING" onClick={this.setButtonStyle}>Bike</li>
          <li onClick={this.setButtonStyle}>Lift</li>
        </ul>
        <TravelWorkoutFormContainer activityType={this.state.selectedButton.className} />
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473099316/photo-1452626038306-9aae5e071dd3_z8afs7.jpg" alt=""/>
      </div>
    );
  }
}

export default WorkoutForm;
