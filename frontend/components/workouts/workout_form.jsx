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


  setButtonStyle(e) {

    if (this.state.selectedButton.style) {
      this.state.selectedButton.style.background = "black";
      this.state.selectedButton.style.color = "white";
      this.forceUpdate();
    }

    e.target.style.background="lightgrey";
    e.target.style.color="black";
    this.setState({selectedButton: e.target});
  }


  render() {
    return(
      <div className="workout-form-outer-container">
        <ul className="workout-form-selection-bar">
          <li className="WALKING" onClick={this.setButtonStyle}>Walk</li>
          <li className="RUNNING" onClick={this.setButtonStyle}>Run</li>
          <li className="BICYCLING" onClick={this.setButtonStyle}>Bike</li>
          <li onClick={this.setButtonStyle}>Lift</li>
        </ul>
        <TravelWorkoutFormContainer activityType={this.state.selectedButton.className} />
      </div>
    );
  }
}

export default WorkoutForm;
