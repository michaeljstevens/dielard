import React from 'react';
import MuscleGroupsPieContainer from './muscle_groups_pie_container.js';
import DistanceTraveledContainer from './distance_traveled_container.js';
import CaloriesBurnedContainer from './calories_burned_container.js';
import GaugesContainer from './gauges_container.js';
import TravelWorkoutIndexItem from '../workouts/travel_workout_index_item.jsx';
import StaticWorkoutIndexItem from '../workouts/static_workout_index_item.jsx';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.latestWorkout = null;
    this.latestWorkoutType = null;
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }

  componentWillReceiveProps(props) {
    if (props.travelWorkouts && props.staticWorkouts) {

      props.travelWorkouts.forEach(travelWorkout => {
        if (this.latestWorkout === null || travelWorkout.date > this.latestWorkout.date) {
          this.latestWorkout = travelWorkout;
          this.latestWorkoutType = "travel";
        }
      });

      props.staticWorkouts.forEach(staticWorkout => {
        if (this.latestWorkout === null || staticWorkout.date > this.latestWorkout.date) {
          this.latestWorkout = staticWorkout;
          this.latestWorkoutType = "static";
        }
      });
    }
  }


  render() {
    let workoutToRender;

    if(this.props.staticWorkout || this.props.travelWorkout) {

      if (this.props.staticWorkout) {
        workoutToRender = <StaticWorkoutIndexItem pathName={this.props.pathName} staticWorkout={this.props.staticWorkout} />;
      }

      if (this.props.travelWorkout) {
        workoutToRender = <TravelWorkoutIndexItem pathName={this.props.pathName} travelWorkout={this.props.travelWorkout}/>;
      }
    } else {
      if(this.latestWorkoutType === "travel") {
        workoutToRender = <TravelWorkoutIndexItem pathName={this.props.pathName} travelWorkout={this.latestWorkout}/>;
      } else if (this.latestWorkoutType === "static") {
        workoutToRender = <StaticWorkoutIndexItem pathName={this.props.pathName} staticWorkout={this.latestWorkout} />;
      } else {
        workoutToRender = null;
      }
    }

    return(
      <div className="stats-super">
        {workoutToRender}
        <div className="stats_outer_div">
          <div className="muscle-group-pie">
            <MuscleGroupsPieContainer />
          </div>
          <div className="gauges">
            <GaugesContainer/>
          </div>
          <div className="distance-traveled">
            <DistanceTraveledContainer />
          </div>
          <div className="calories-burned">
            <CaloriesBurnedContainer />
          </div>
        </div>
      </div>
    );
  }
}
export default Stats;
