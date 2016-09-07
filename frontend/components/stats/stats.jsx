import React from 'react';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.pieData = [];
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.props.requestStaticWorkouts();
    google.charts.load('current', {'packages':['corechart']});
  }

  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Body Part');
    data.addColumn('number', 'Exercises');
    data.addRows(this.pieData);

    // Set chart options
    var options = {'title':'Exercises by Body Part',
                   'width':800,
                   'height':600};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  render() {


    // Set a callback to run when the Google Visualization API is loaded.

    if (this.props.staticWorkouts){
      let that = this;
      let pieDataObj = {};
      this.props.staticWorkouts.forEach(staticWorkout => {
        staticWorkout.workout_exercises.forEach(workoutExercise => {
          let muscle_group = workoutExercise.exercise.muscle_group;
          pieDataObj[muscle_group] ? pieDataObj[muscle_group] += 1 : pieDataObj[muscle_group] = 1;
        });
      });
      let pieKeys = Object.keys(pieDataObj);
      pieKeys.forEach(key => {
        that.pieData.push([key, pieDataObj[key]]);
      });
      google.charts.setOnLoadCallback(this.drawChart);
    }
    return(
      <div id="chart_div"></div>
    );
  }
}

export default Stats;
