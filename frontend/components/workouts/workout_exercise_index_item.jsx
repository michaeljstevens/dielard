import React from 'react';

class WorkoutExerciseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      static_workout_id: this.props.staticWorkout.id,
      exercise_id: this.props.exercise.id,
      reps: null,
      sets: null,
      weight: null,
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
    this.props.createWorkoutExercise(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Reps
            <input type="text" onChange={this.updateState("reps")} />
          </label>
          <label>
            Sets
            <input type="text" onChange={this.updateState("sets")} />
          </label>
          <label>
            Weight
            <input type="text" onChange={this.updateState("weight")} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default WorkoutExerciseIndexItem;
