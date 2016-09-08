import React from 'react';

class StaticWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.staticWorkout = this.props.staticWorkout;
    this.weightLifted = 0;
    this.staticWorkout.workout_exercises.forEach(workout_exercise => {
      this.weightLifted += (workout_exercise.weight * workout_exercise.sets * workout_exercise.reps);
    });
    this.exercises = [];
    this.removeStaticWorkout = this.removeStaticWorkout.bind(this);
  }

  removeStaticWorkout() {
    if (this.props.destroyStaticWorkout) {
      this.props.destroyStaticWorkout(this.props.staticWorkout.id);
      this.setState();
    }
  }



  render() {

    const workoutExercises = this.staticWorkout.workout_exercises;
    if(workoutExercises) {
      workoutExercises.forEach(workEx => {
        this.exercises.push(
          <ul className="static-workout-index-item">
            <li>
              {workEx.exercise.title}
            </li>
            <li>
              {workEx.sets}
            </li>
            <li>
              {workEx.reps}
            </li>
            <li>
              {workEx.weight}
            </li>
          </ul>
        );
      });
    }



    return(
      <div className="static-workout-index-item-container">
        <ul className="static-workout-summary-list">

          <label>
            <h2>Date</h2>
            <li>{this.staticWorkout.date}</li>
          </label>
          <label>
            <h2>Duration</h2>
            <li>{this.staticWorkout.duration}</li>
          </label>
          <label>
            <h2>Total Weight Lifted</h2>
            <li>{this.weightLifted}</li>
          </label>
          <label>
            <h2>Calories Burned</h2>
            <li>{this.staticWorkout.calories}</li>
          </label>
        </ul>
        <ul className="static-notes">
          <img src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473029911/exercise-icon-32_i3pwzz.png"
            className="static-workout-img"/>
          <label>
            <h2>Notes</h2>
            <li>{this.staticWorkout.notes}</li>
          </label>
        </ul>
        {this.props.pathName != "/" ? <button className="travel-workout-delete" onClick={this.removeStaticWorkout}>Delete</button> : null }
        <ul className="static-workout-outer-exercise-list">
          <ul className="static-workout-exercise-headers">
            <li>Exercise</li>
            <li>Sets</li>
            <li>Reps</li>
            <li>Weight</li>
          </ul>
          {this.exercises}
        </ul>
      </div>
    );
  }
}

export default StaticWorkoutIndexItem;
