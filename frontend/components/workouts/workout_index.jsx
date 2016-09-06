import React from 'react';
import TravelWorkoutIndexItem from './travel_workout_index_item.jsx';
import StaticWorkoutIndexItem from './static_workout_index_item.jsx';


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }

  render () {

    const travelWorkouts = this.props.travelWorkouts;
    const staticWorkouts = this.props.staticWorkouts;

    let travelWorkoutList = [];
    let staticWorkoutList = [];

    if(!!travelWorkouts) {
      const keys = Object.keys(travelWorkouts);
      keys.forEach (key => {
        travelWorkoutList.push(<TravelWorkoutIndexItem travelWorkout={travelWorkouts[key]} key={key}/>);
      });
    }

    if(!!staticWorkouts) {
      const keys = Object.keys(staticWorkouts);
      keys.forEach (key => {
        staticWorkoutList.push(<StaticWorkoutIndexItem staticWorkout={staticWorkouts[key]} key={key} />);
      });
    }

    return(
      <div className="workout-index-outer-div">
        {travelWorkoutList}
        {staticWorkoutList}
      </div>
    );
  }
}

export default WorkoutIndex;
