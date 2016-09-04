import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class ExerciseForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      title: "",
      description: "",
      muscle_group: ""
    };

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createExercise(this.state);
    this.setState({
      user_id: this.props.currentUser.id,
      title: "",
      description: "",
      muscle_group: ""
    });
  }


  render () {
    return (
      <div className="exercise-form-outer">
        <div className="exercise-form-container">
          <h1 className="exercise-form-header">Create Exercise</h1>
          <form className="exercise-form" onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input type="text" value={this.state.title} className="exercise-form-title exercise-form-input"
              onChange={this.updateState("title")} />
            <label>Description:</label>
            <textarea className="exercise-form-description exercise-form-input" value={this.state.description}
              onChange={this.updateState("description")} />
            <label>Muscle Group:</label>
            <select className="exercise-form-select exercise-form-input" value={this.state.muscle_group}
              onChange={this.updateState("muscle_group")}>
              <option value=""></option>
              <option value="Chest">Chest</option>
              <option value="Biceps">Biceps</option>
              <option value="Triceps">Triceps</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Legs">Legs</option>
              <option value="Glutes">Glutes</option>
              <option value="Back">Back</option>
              <option value="Core">Core</option>
              <option value="Other">Other</option>
            </select>
            <input type="submit" className="exercise-form-submit" value="Create" />
          </form>
        </div>
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472984342/photo-1466761366829-84fd59a22e0b_xqcq1x.jpg" alt=""/>
      </div>
    );
  }
}




export default ExerciseForm;
