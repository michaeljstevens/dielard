import React from 'react';

class Gauges extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = [['Label', 'Value']];
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
    this.chartData = [['Label', 'Value']];
    if (props.travelWorkouts && props.staticWorkouts){

      let totalTime = 0;
      let totalWeight = 0;

      props.travelWorkouts.forEach(travelWorkout => {
        totalTime += parseInt(travelWorkout.route.duration);
      });

      props.staticWorkouts.forEach(staticWorkout => {
        totalTime += staticWorkout.duration;
        staticWorkout.workout_exercises.forEach(workoutExercise => {
          totalWeight += workoutExercise.weight;
        });
      });

      this.chartData.push(['Hours', (totalTime/60)]);
      this.chartData.push(['Pounds', totalWeight]);

      google.charts.setOnLoadCallback(this.drawChart);
    }
  }

  drawChart() {
    // Create the data table.
    var data = new google.visualization.arrayToDataTable(this.chartData);
    var options = {
          width: 450, height: 180,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Gauge(document.getElementById('gauges_div'));

    chart.draw(data, options);
  }

  render() {
    return(
      <div id="gauges_div" style={{width: "400px"}, {height: "120px"}}></div>
    );
  }
}

export default Gauges;
