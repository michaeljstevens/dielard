import React from 'react';
import MuscleGroupsPieContainer from './muscle_groups_pie_container.js';
import DistanceTraveledContainer from './distance_traveled_container.js';
import CaloriesBurnedContainer from './calories_burned_container.js';
import PoundsLiftedContainer from './pounds_lifted_container.js';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    google.charts.load('current', {'packages':['corechart']});
  }

  render() {
    return(
      <div>
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
          <PoundsLiftedContainer />
        </div>
      </div>
    );
  }
}
export default Stats;
