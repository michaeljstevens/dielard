import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class ExerciseForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      title: "",
      description: "",
      muscle_group: ""
    };

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createExercise(this.state);
  }

  render () {
    return (
      <div>exerciseform</div>
    );
  }
}




export default ExerciseForm;
