import React from 'react';

class MuscleGroupsPie extends React.Component {

  constructor(props) {
    super(props);
    this.pieData = [];
    this.drawChart = this.drawChart.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
    this.renderChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.renderChart(newProps);
  }

  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Body Part');
    data.addColumn('number', 'Exercises');
    data.addRows(this.pieData);

    // Set chart options
    var options = {'title':'Exercises by Body Part',
                   'width':450,
                   'height':'400',
                    pieHole: 0.4
                  };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('muscle_group_div'));
    chart.draw(data, options);
  }

  renderChart(props) {
    this.pieData = [];
    if (props.staticWorkouts){
      let that = this;
      let pieDataObj = {};
      props.staticWorkouts.forEach(staticWorkout => {
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
  }

  render() {

    return(
      <div id="muscle_group_div"></div>
    );
  }
}

export default MuscleGroupsPie;
