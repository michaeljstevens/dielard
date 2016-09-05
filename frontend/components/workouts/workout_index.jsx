import React from 'react';
import TravelWorkoutIndexItem from './travel_workout_index_item.jsx';


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestRoutes();
  }

  render () {

    const travelWorkouts = this.props.travelWorkouts;
    const routes = this.props.routes;
    let currentRoute = null;

    let travelWorkoutList = [];
    if(!!travelWorkouts && !!routes) {
      const routeKeys = Object.keys(routes);
      const keys = Object.keys(travelWorkouts);
      keys.forEach (key => {
        routeKeys.forEach (routeKey => {

          if(parseInt(routes[routeKey].id) === travelWorkouts[key].route_id) {
            currentRoute = routes[routeKey];
          }
        });
        travelWorkoutList.push(<TravelWorkoutIndexItem travelWorkout={travelWorkouts[key]}
          route={currentRoute} key={key}/>);
      });
    }

    return(
      <div className="workout-index-outer-div">
        {travelWorkoutList}
      </div>
    );
  }
}

export default WorkoutIndex;
