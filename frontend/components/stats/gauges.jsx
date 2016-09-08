import React from 'react';

class Gauges extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = [];
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
    this.chartData = [];
    if (props.travelWorkouts && props.staticWorkouts){

      let totalTime = 0;
      let totalWeight = 0;

      props.travelWorkouts.forEach(travelWorkout => {
        totalTime += parseInt(travelWorkout.route.duration);
      });

      props.staticWorkouts.forEach(staticWorkout => {
        totalTime += staticWorkout.duration;
        staticWorkout.workout_exercises.forEach(workoutExercise => {
          totalWeight += workoutExercise.weight * workoutExercise.sets * workoutExercise.reps;
        });
      });

      this.chartData.push(['Hours', (totalTime/60)]);
      this.chartData.push(['Pounds', totalWeight]);

      google.charts.setOnLoadCallback(this.drawChart);
    }
  }

  drawChart() {
    // Create the data table.
    const timeData = [['Label', 'Value'], this.chartData[0]];
    const timeChartData = new google.visualization.arrayToDataTable(timeData);
    const timeOptions = {
      width: 225, height: 180,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5,
      max: 100
    };

    const weightData = [['Label', 'Value'], this.chartData[1]];
    const weightChartData = new google.visualization.arrayToDataTable(weightData);
    const weightOptions = {
      width: 225, height: 180,
      redFrom: 900000, redTo: 1000000,
      yellowFrom:750000, yellowTo: 900000,
      minorTicks: 5,
      max: 1000000
    };

    // Instantiate and draw our chart, passing in some options.
    const timeChart = new google.visualization.Gauge(document.getElementById('time_div'));
    const weightChart = new google.visualization.Gauge(document.getElementById('weight_div'));
    timeChart.draw(timeChartData, timeOptions);
    weightChart.draw(weightChartData, weightOptions);
  }

  render() {
    return(
      <div className="gauge-container">
        <div id="time_div" style={{width: "200px"}, {height: "120px"}}></div>
        <div id="weight_div" style={{width: "200px"}, {height: "120px"}}></div>
      </div>
    );
  }
}

export default Gauges;
