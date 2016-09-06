import React from 'react';
import RouteIndexItem from '../routes/route_index_item.jsx';

class TravelWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const travelWorkout = this.props.travelWorkout;

    return(
      <div className="travelWorkout-index-item">
        <ul className="travel-workout-index-list">
          <li>{travelWorkout.date}</li>
          <li>{travelWorkout.notes}</li>
          <li>{travelWorkout.calories}</li>
        </ul>
        <div className="workout-index-route">
          <RouteIndexItem route={travelWorkout.route} />
        </div>
      </div>
    );
  }

}

export default TravelWorkoutIndexItem;
