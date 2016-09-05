import React from 'react';
import moment from 'moment';
import RouteIndexItem from '../routes/route_index_item.jsx';

class TravelWorkoutForm extends React.Component {

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
      if (field === "route_id") {
        const routeInt = parseInt(e.currentTarget.value);
        this.setState({[field]: routeInt});
      } else {
        this.setState({[field]: e.currentTarget.value});
      }
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createTravelWorkout(this.state);
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

    return(
      <div className="travel-workout-form-outer">
        <div className="travel-workout-form-container">
          <form className="travel-workout-form" onSubmit={this.handleSubmit}>
            <label>Date</label>
            <input className="travel-workout-date" type="date" value={this.state.date}
              onChange={this.updateState("date")} />
            <label>Notes</label>
            <textarea className="travel-workout-form-notes" value={this.state.notes}
              onChange={this.updateState("notes")} />
            <label>Route</label>
            <select className="travel-workout-form-select" value={this.state.route}
              onChange={this.updateState("route_id")}>
              {allRoutes}
            </select>
            <input type="submit" className="travel-workout-form-submit" value="Create" />
          </form>
        </div>
        {this.state.route_id ? <RouteIndexItem route={this.currentRoute} /> : null}
        <img className="splash-image" src="" alt=""/>
      </div>
    );
  }
}

export default TravelWorkoutForm;
