import React from 'react';
import TravelWorkoutIndexItem from './travel_workout_index_item.jsx';
import StaticWorkoutIndexItem from './static_workout_index_item.jsx';


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.i = 0;
    this.increaseOffset = this.increaseOffset.bind(this);
    this.decreaseOffset = this.decreaseOffset.bind(this);
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }

  increaseOffset() {
    if (this.state.offset <= this.allWorkoutList.length - 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset += 10});
      }, 500);
    }
  }

  decreaseOffset() {
    if (this.state.offset >= 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset -= 10});
      }, 500);
    }
  }

  render () {

    const travelWorkouts = this.props.travelWorkouts;
    const staticWorkouts = this.props.staticWorkouts;

    let travelWorkoutList = [];
    let staticWorkoutList = [];
    let allWorkoutList = [];
    let currentWorkoutList = [];


    if(!!travelWorkouts) {
      const keys = Object.keys(travelWorkouts);
      keys.forEach (key => {
        travelWorkoutList.push(<TravelWorkoutIndexItem travelWorkout={travelWorkouts[key]} key={this.i}/>);
        this.i ++;
      });
    }

    if(!!staticWorkouts) {
      const keys = Object.keys(staticWorkouts);
      keys.forEach (key => {
        staticWorkoutList.push(<StaticWorkoutIndexItem staticWorkout={staticWorkouts[key]} key={this.i} />);
        this.i ++;
      });
    }

    if (!!travelWorkouts && !!staticWorkouts) {

      allWorkoutList = travelWorkoutList.concat(staticWorkoutList);

      allWorkoutList.sort( (a,b) => {
        const date1 = a.props.travelWorkout ? a.props.travelWorkout.date : a.props.staticWorkout.date;
        const date2 = b.props.travelWorkout ? b.props.travelWorkout.date : b.props.staticWorkout.date;

        if (date1 < date2) {
          return 1;
        } else {
          return -1;
        }
      });
      this.allWorkoutList = allWorkoutList;
    }

    currentWorkoutList = allWorkoutList.slice(this.state.offset, this.state.offset + 10);

    return(
      <div className="workout-index-outer-div">
        {currentWorkoutList}
        <div className="route-page-buttons">
          <button className="route-next-page" onClick={this.increaseOffset}>Next Page</button>
          <button className="route-prev-page" onClick={this.decreaseOffset}>Previous Page</button>
        </div>
      </div>
    );
  }
}

export default WorkoutIndex;
