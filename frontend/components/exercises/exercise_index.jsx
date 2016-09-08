import React from 'react';
import ExerciseIndexItem from './exercise_index_item.jsx';

class ExerciseIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      muscleGroup: "All"
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount () {
    this.props.requestExercises();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    let exercises = this.props.exercises;
    let exerciseItems = [];
    if (exercises) {
      let keys = Object.keys(exercises);
      keys.forEach ( key => {
        if(this.state.muscleGroup === "All") {
          exerciseItems.push(<ExerciseIndexItem exercise={exercises[key]} key={key}
            destroyExercise={this.props.destroyExercise}/>);
        } else {
          if(exercises[key].muscle_group === this.state.muscleGroup) {
            exerciseItems.push(<ExerciseIndexItem exercise={exercises[key]} key={key}
              destroyExercise={this.props.destroyExercise}/>);
          }
        }
      });
    }
    return (
      <div className="exercise-index-item-outer-div">
        <label className="exercise-index-select-label">Muscle Group</label>
        <select className="exercise-index-select" value={this.state.muscleGroup}
          onChange={this.updateState("muscleGroup")}>
          <option value="All">All</option>
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
        {exerciseItems}
      </div>
    );
  }
}

export default ExerciseIndex;
