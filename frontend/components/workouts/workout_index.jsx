import React from 'react';
import TravelWorkoutIndexItem from './travel_workout_index_item.jsx';
import StaticWorkoutIndexItem from './static_workout_index_item.jsx';

const RouteTypes = {
  Walk: "WALKING",
  Run: "RUNNING",
  Bike: "BICYCLING"
};


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0, workoutType: "All"};
    this.i = 0;
    this.increaseOffset = this.increaseOffset.bind(this);
    this.decreaseOffset = this.decreaseOffset.bind(this);
    this.updateState = this.updateState.bind(this);
    this.allWorkoutList = [];
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
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


    if(travelWorkouts) {
      const keys = Object.keys(travelWorkouts);
      keys.forEach (key => {
        travelWorkoutList.push(<TravelWorkoutIndexItem travelWorkout={travelWorkouts[key]} key={this.i}/>);
        this.i ++;
      });
    }

    if(staticWorkouts) {
      const keys = Object.keys(staticWorkouts);
      keys.forEach (key => {
        staticWorkoutList.push(<StaticWorkoutIndexItem staticWorkout={staticWorkouts[key]} key={this.i} />);
        this.i ++;
      });
    }

    if (travelWorkouts && staticWorkouts) {

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

      if (this.state.workoutType === "All")
      {
        this.allWorkoutList = allWorkoutList;
      } else if (this.state.workoutType === "Lift") {
        this.allWorkoutList = allWorkoutList.filter( workout => {
          if(workout.props.staticWorkout) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        this.allWorkoutList = allWorkoutList.filter( workout => {
          if (workout.props.travelWorkout && workout.props.travelWorkout.route.activity_type === RouteTypes[this.state.workoutType]) {
            return true;
          }
        });
      }
    }


    currentWorkoutList = this.allWorkoutList.slice(this.state.offset, this.state.offset + 10);

    return(
      <div className="workout-index-outer-div">
        <select className="workout-index-select" value={this.state.workoutType}
          onChange={this.updateState("workoutType")}>
          <option value="All">All</option>
          <option value="Walk">Walk</option>
          <option value="Run">Run</option>
          <option value="Bike">Bike</option>
          <option value="Lift">Lift</option>
        </select>
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
