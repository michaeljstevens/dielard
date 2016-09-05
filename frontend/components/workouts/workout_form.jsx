import React from 'react';
import moment from 'moment';

class WorkoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      route_id: null,
      date: moment().format("YYYY-MM-DD"),
      notes: "",
      calories: 300
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.requestRoutes();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createTravelWorkout(this.state);
  }

  render () {
    const allRoutes = [];

    if (!!this.props.routes) {
      let routeKeys = Object.keys(this.props.routes);
      routeKeys.forEach( key => {
        allRoutes.push(<option key={key} value={this.props.routes[key].id}>{this.props.routes[key].title}</option>);
      });
    }
    return(
      <div className="travel-workout-form-outer">
        <div className="travel-workout-form-container">
          <form className="travel-workout-form" onSubmit={this.handleSubmit}>
            <label>Date</label>
            <input type="date" value={this.state.date}
              onChange={this.updateState("date")} />
            <label>Notes</label>
            <textarea className="travel-workout-form-description travel-workout-form-input" value={this.state.notes}
              onChange={this.updateState("notes")} />
            <label>Route</label>
            <select className="travel-workout-form-select travel-workout-form-input" value={this.state.route}
              onChange={this.updateState("route_id")}>
              {allRoutes}
            </select>
            <input type="submit" className="travel-workout-form-submit" value="Create" />
          </form>
        </div>
        <img className="splash-image" src="" alt=""/>
      </div>
    );
  }
}

export default WorkoutForm;
