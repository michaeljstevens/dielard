import React from 'react';
import ExerciseIndexItem from './exercise_index_item.jsx';

class ExerciseIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      muscleGroup: "All",
      offset: 0
    };
    this.updateState = this.updateState.bind(this);
    this.increaseOffset = this.increaseOffset.bind(this);
    this.decreaseOffset = this.decreaseOffset.bind(this);
  }

  componentDidMount () {
    this.props.requestExercises();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  increaseOffset() {
    if (this.state.offset <= this.exerciseItems.length - 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset += 10});
      }, 0);
    }
  }

  decreaseOffset() {
    if (this.state.offset >= 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset -= 10});
      }, 0);
    }
  }

  render () {
    this.exerciseItems = [];
    let currentExerciseList = [];
    let exercises = this.props.exercises;
    if (exercises) {
      let keys = Object.keys(exercises);
      keys.forEach ( key => {
        if(this.state.muscleGroup === "All") {
          this.exerciseItems.push(<ExerciseIndexItem exercise={exercises[key]} key={key}
            destroyExercise={this.props.destroyExercise}/>);
        } else {
          if(exercises[key].muscle_group === this.state.muscleGroup) {
            this.exerciseItems.push(<ExerciseIndexItem exercise={exercises[key]} key={key}
              destroyExercise={this.props.destroyExercise}/>);
          }
        }
      });
      this.exerciseItems.reverse();
      currentExerciseList  = this.exerciseItems.slice(this.state.offset, this.state.offset + 10);
    }


    return (
      <div className="exercise-index-item-outer-div">
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
        {currentExerciseList}
        <div className="route-page-buttons">
          <img src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473375546/prev_arrow_ikhyek.png" onClick={this.decreaseOffset} />
          <img src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473375546/next_arrow_a7elvn.png" onClick={this.increaseOffset} />
        </div>
      </div>
    );
  }
}

export default ExerciseIndex;
