import React from 'react';
import MuscleGroupsPieContainer from './muscle_groups_pie_container.js';
import DistanceTraveledContainer from './distance_traveled_container.js';
import CaloriesBurnedContainer from './calories_burned_container.js';
import GaugesContainer from './gauges_container.js';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    google.charts.load('current', {'packages':['corechart', 'gauge']});
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
    this.props.requestStaticWorkouts();
  }

  render() {
    return(
      <div className="stats_outer_div">
        <div>
          <MuscleGroupsPieContainer />
        </div>
        <div>
          <DistanceTraveledContainer />
        </div>
        <div>
          <CaloriesBurnedContainer />
        </div>
        <div>
          <GaugesContainer/>
        </div>
      </div>
    );
  }
}
export default Stats;
