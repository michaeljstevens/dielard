import React from 'react';

class StaticWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.staticWorkout = this.props.staticWorkout;
    this.weightLifted = 0;
    this.staticWorkout.workout_exercises.forEach(workout_exercise => {
      this.weightLifted += workout_exercise.weight;
    });
    this.exercises = [];
  }



  render() {

    const workoutExercises = this.staticWorkout.workout_exercises;
    if(!!workoutExercises) {
      workoutExercises.forEach(workEx => {
        this.exercises.push(
          <li>
            <ul className="static-workout-exercise-item">
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
          </li>
        );
      });
    }


    return(
      <div className="static-workout-index-item-container">
        <ul>
          <label>
            <h2>Date:</h2>
            <li>{this.staticWorkout.date}</li>
          </label>
          <label>
            <h2>Duration:</h2>
            <li>{this.staticWorkout.duration}</li>
          </label>
          <label>
            <h2>Total Weight Lifted:</h2>
            <li>{this.weightLifted}</li>
          </label>
          <label>
            <h2>Notes:</h2>
            <li>{this.staticWorkout.notes}</li>
          </label>
          <label>
            <h2>Calories Burned:</h2>
            <li>{this.staticWorkout.calories}</li>
          </label>
        </ul>
        <ul className="static-workout-outer-exercise-list">
          <ul className="static-workout-exercise-headers">
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
