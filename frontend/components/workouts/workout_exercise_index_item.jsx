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
    e.currentTarget.style.background = "grey";
    e.currentTarget.style.color = "white";
    const children = Array.from(e.currentTarget.children);
    children.forEach(child => {
      child.children[0].style.border = "1px solid white";
    });
  }

  handleRemove () {

  }

  render() {
    return(
      <div className="workout-exercise-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Sets
            <input type="text" className="workout-exercise-input" onChange={this.updateState("sets")} />
          </label>
          <label>
            Reps
            <input type="text" className="workout-exercise-input" onChange={this.updateState("reps")} />
          </label>
          <label>
            Weight
            <input type="text" className="workout-exercise-input" onChange={this.updateState("weight")} />
          </label>
          <input className="workout-exercise-submit" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default WorkoutExerciseIndexItem;
