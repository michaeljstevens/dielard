import React from 'react';

class StaticWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const staticWorkout = this.props.staticWorkout;
    return(
      <div>
        {staticWorkout.calories}
      </div>
    );
  }
}

export default StaticWorkoutIndexItem;
