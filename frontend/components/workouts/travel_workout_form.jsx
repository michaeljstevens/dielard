import React from 'react';
import moment from 'moment';
import RouteIndexItem from '../routes/route_index_item.jsx';
import {Link, hashHistory} from 'react-router';

class TravelWorkoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      route_id: null,
      date: moment().format("YYYY-MM-DD"),
      notes: "",
      calories: null,
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCalories = this.getCalories.bind(this);
    this.submitDisabled = true;
    this.submitStyle = {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      padding: "4px",
      background: "black",
      color: "white",
    };
  }

  componentDidMount () {
    this.props.requestRoutes();
  }

  componentWillReceiveProps () {
    this.setState({route_id: null});
  }

  updateState (field) {
    return e => {
      if (field === "route_id") {
        const routeInt = parseInt(e.currentTarget.value);
        this.setState({[field]: routeInt});
      } else {
        this.setState({[field]: e.currentTarget.value});
      }
    };
  }

  getCalories() {
    let calories = null;
    const hrDuration = parseInt(this.currentRoute.duration) / 60;
    const minDuration = parseInt(this.currentRoute.duration);
    const distance = parseInt(this.currentRoute.distance);
    const lbWeight = this.props.currentUser.weight;
    const kgWeight = this.props.currentUser.weight * .45359237;

    if (this.currentRoute.activity_type === "BICYCLING") {
      calories = Math.round(hrDuration * kgWeight * 10);
    } else if (this.currentRoute.activity_type === "WALKING") {
      calories = Math.round(lbWeight * minDuration * 0.039);
    } else {
      calories = Math.round(hrDuration * kgWeight * 5);
    }
    this.state.calories = calories;
  }

  handleSubmit (e) {
    this.getCalories();
    e.preventDefault();
    this.props.createTravelWorkout(this.state);
    this.state = {
      user_id: this.props.currentUser.id,
      route_id: null,
      date: moment().format("YYYY-MM-DD"),
      notes: "",
      calories: null
    };
    hashHistory.push("/");
  }

  render () {
    const allRoutes = [];

    if (!!this.props.routes) {
      let that = this;
      let routeKeys = Object.keys(this.props.routes);
      routeKeys.forEach( key => {

        if (!!that.state.route_id && that.props.routes[key].id === that.state.route_id) {
          that.currentRoute = that.props.routes[key];
        }
        if (that.props.routes[key].activity_type === that.props.activityType) {
          allRoutes.push(<option key={key} value={that.props.routes[key].id}>{that.props.routes[key].title}</option>);
        }
      });
    }

    if(this.state.date && this.state.route_id) {
      this.submitDisabled = false;
    } else {
      this.submitDisabled = true;
    }

    if (!this.submitDisabled) {
      this.submitStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        padding: "4px",
        background: "black",
        color: "white",
      };
    } else {
      this.submitStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        padding: "4px",
        background: "grey",
        color: "white",
      };
    }

    return(
      <div className="travel-workout-form-outer">
        <div className="travel-workout-form-container">
          <form className="travel-workout-form" onSubmit={this.handleSubmit}>
            <label>
              <h2>Date</h2>
              <input className="travel-workout-date" type="date" value={this.state.date}
                onChange={this.updateState("date")} />
            </label>
            <label><h2>Notes</h2>
              <textarea className="travel-workout-form-notes" value={this.state.notes}
                onChange={this.updateState("notes")} />
            </label>
            <label><h2>Route</h2>
              <select className="travel-workout-form-select" value={this.state.route}
                onChange={this.updateState("route_id")}>
                <option>Select Route</option>
                {allRoutes}
              </select>
            </label>
            <input type="submit" disabled={this.submitDisabled} style={this.submitStyle}
              className="travel-workout-form-submit" value="Create" />
          </form>
        </div>
        <div className="travel-workout-route">
          {this.state.route_id ? <RouteIndexItem route={this.currentRoute} /> : null}
        </div>
      </div>
    );
  }
}

export default TravelWorkoutForm;
