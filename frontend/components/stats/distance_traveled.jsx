import React from 'react';

const ActivityConstants = {
  WALKING: 'Walk',
  RUNNING: 'Run',
  BICYCLING: 'Bike'
};

const ActivityColors = {
  WALKING: "green",
  RUNNING: "blue",
  BICYCLING: "orange",
};

class DistanceTraveled extends React.Component {

  constructor(props) {
    super(props);
    this.chartData = [['Activity', 'Miles', { role: "style"}]];
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.props.requestTravelWorkouts();
  }

  drawChart() {
    // Create the data table.
    var data = new google.visualization.arrayToDataTable(this.chartData);

    var options = {
          title: 'Distance Traveled',
          width: 600,
          height: 400,
          hAxis: {title: 'Activity',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Miles', minValue: 0},
          legend: {position: 'none'}
        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('distance_traveled_div'));
       chart.draw(data, options);
    }
  render() {
    if (this.props.travelWorkouts){
      const travelDistances = {};
      this.props.travelWorkouts.forEach(travelWorkout => {
        let activity_type = travelWorkout.route.activity_type;
        let distance = parseFloat(travelWorkout.route.distance);
        travelDistances[activity_type] ? travelDistances[activity_type] += distance : travelDistances[activity_type] = distance
      });
      Object.keys(travelDistances).forEach(key => {
        this.chartData.push([ActivityConstants[key], travelDistances[key], ActivityColors[key]]);
      });
      google.charts.setOnLoadCallback(this.drawChart);
    }
    return(
      <div id="distance_traveled_div" style={{width: "900px"}, {height: "500px"}}></div>
    );
  }
}

export default DistanceTraveled;
