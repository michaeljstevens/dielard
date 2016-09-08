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
    this.renderChart = this.renderChart.bind(this);
  }

  // componentDidMount() {
  //   this.renderChart(this.props);
  // }

  componentWillReceiveProps(newProps) {
    this.renderChart(newProps);
  }

  renderChart(props) {
    this.chartData = [['Activity', 'Miles', { role: "style"}]];
    if (props.travelWorkouts){
      const travelDistances = {};
      props.travelWorkouts.forEach(travelWorkout => {
        let activity_type = travelWorkout.route.activity_type;
        let distance = parseFloat(travelWorkout.route.distance);
        travelDistances[activity_type] ? travelDistances[activity_type] += distance : travelDistances[activity_type] = distance
      });
      Object.keys(travelDistances).forEach(key => {
        this.chartData.push([ActivityConstants[key], travelDistances[key], ActivityColors[key]]);
      });
      google.charts.setOnLoadCallback(this.drawChart);
    }
  }


  drawChart() {
    // Create the data table.
    var data = new google.visualization.arrayToDataTable(this.chartData);

    var options = {
          title: 'Distance Traveled',
          width: 450,
          height: 300,
          hAxis: {title: 'Activity',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Miles', minValue: 0},
          legend: {position: 'none'}
        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('distance_traveled_div'));
       chart.draw(data, options);
    }

  render() {
    return(
      <div id="distance_traveled_div"></div>
    );
  }
}

export default DistanceTraveled;
