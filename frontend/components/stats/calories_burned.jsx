import React from 'react';

const ActivityConstants = {
  WALKING: 'Walk',
  RUNNING: 'Run',
  BICYCLING: 'Bike',
  Lift: 'Lift'
};

const ActivityColors = {
  WALKING: "green",
  RUNNING: "blue",
  BICYCLING: "orange",
  Lift: "yellow"
};

class CaloriesBurned extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = [['Activity', 'K/Cal', { role: "style"}]];
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
    this.chartData = [['Activity', 'K/Cal', { role: "style"}]];
    if (props.travelWorkouts && props.staticWorkouts){
      const caloriesData = {};
      caloriesData["Lift"] = 0;
      let totalCalories = 0;

      props.travelWorkouts.forEach(travelWorkout => {
        let activity_type = travelWorkout.route.activity_type;
        let calories = travelWorkout.calories;
        totalCalories += calories;
        caloriesData[activity_type] ? caloriesData[activity_type] += calories : caloriesData[activity_type] = calories
      });

      props.staticWorkouts.forEach(staticWorkout => {
        let calories = staticWorkout.calories;
        totalCalories += calories;
        caloriesData["Lift"] += calories;
      });

      Object.keys(caloriesData).forEach(key => {
        this.chartData.push([ActivityConstants[key], caloriesData[key], ActivityColors[key]]);
      });
      this.chartData.push(["Total", totalCalories, "red"]);
      google.charts.setOnLoadCallback(this.drawChart);
    }
  }

  drawChart() {
  // Create the data table.
  var data = new google.visualization.arrayToDataTable(this.chartData);
  var options = {
        title: 'Calories Burned',
        width: 450,
        height: 300,
        vAxis: {title: 'Activity', minValue: 0, titleTextStyle: {color: '#333'}},
        hAxis: {title: 'Calories', titleTextStyle: {color: '#333'}},
        legend: {position: 'none'}
      };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('calories_burned_div'));
       chart.draw(data, options);
    }

  render() {
    return(
      <div id="calories_burned_div" style={{width: "900px"}, {height: "500px"}}></div>
    );
  }
}

export default CaloriesBurned;
