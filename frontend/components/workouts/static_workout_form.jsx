import React from 'react';
import moment from 'moment';
import StaticWorkoutIndexItem from './static_workout_index_item.jsx';

class StaticWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      user_id: this.props.currentUser.id,
      date: moment().format("YYYY-MM-DD"),
      duration: null,
      focus: "",
      calories: null,
      notes: "",
      exercises: []
    };
    this.updateState = this.updateState.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  componentDidMount() {
    this.props.requestExercises();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  addExercise() {
    return e => {
      if(e.currentTarget.value !== "Select Exercise") {
        const exercises = this.props.exercises;
        const exerciseKeys = Object.keys(exercises);
        exerciseKeys.forEach(key => {
          if (exercises[key].title === e.currentTarget.value) {
            this.setState({exercises: this.state.exercises.concat(exercises[key])});
          }
        });
      }
    };
  }

  render() {

    const allExercises = [];
    const myExercises = [];

    if(!!this.props.exercises) {
      const exerciseKeys = Object.keys(this.props.exercises);
      let that = this;
      exerciseKeys.forEach(key => {
        allExercises.push(<option key={key} value={that.props.exercises[key].title}>
          {that.props.exercises[key].title}</option>);
      });
    }

    if (this.state.exercises.length > 0) {
      this.state.exercises.forEach(exercise => {
        myExercises.push(
          <div key={exercise.id}>
            {exercise.title}
            Reps
            <input type="text" />
            Sets
            <input type="text" />
            Weight
            <input type="text" />
          </div>
        );
      });
    }


    return(
      <div className="static-workout-form-outer">
        <div className="static-workout-form-container">
          <form className="static-workout-form">
            <label>
              <h2>Date:</h2>
              <input className="static-workout-date" type="date" value={this.state.date}
                onChange={this.updateState("date")} />
            </label>
            <label><h2>Notes:</h2>
              <textarea className="static-workout-form-notes" value={this.state.notes}
                onChange={this.updateState("notes")} />
            </label>
            <label><h2>Exercises:</h2>
              <select className="static-workout-form-select"
                onChange={this.addExercise()}>
                <option>Select Exercise</option>
                {allExercises}
              </select>
            </label>
            {myExercises}
            <div>
            </div>
            <input type="submit" className="static-workout-form-submit" value="Create" />
          </form>
        </div>
      </div>
    );
  }
}

export default StaticWorkoutForm;
