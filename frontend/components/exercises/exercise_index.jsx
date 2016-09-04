import React from 'react';
import ExerciseIndexItem from './exercise_index_item.jsx';

class ExerciseIndex extends React.Component {

  componentDidMount () {
    this.props.requestExercises();
  }

  render () {
    let exercises = this.props.exercises;
    let exerciseItems = [];
    if (!!exercises) {
      let keys = Object.keys(exercises);
      keys.forEach ( key => {
        exerciseItems.push(<ExerciseIndexItem exercise={exercises[key]} key={key}
          destroyExercise={this.props.destroyExercise}/>);
      });
    }
    return (
      <div className="exercise-index-item-outer-div">
        {exerciseItems}
      </div>
    );
  }
}

export default ExerciseIndex;
