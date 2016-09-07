import React from 'react';
import MuscleGroupsPieContainer from './muscle_groups_pie_container.js';
import DistanceTraveledContainer from './distance_traveled_container.js';
import CaloriesBurnedContainer from './calories_burned_container.js';
import GaugesContainer from './gauges_container.js';

class Stats extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }


  render() {
    return(
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
    );
  }
}
export default Stats;
