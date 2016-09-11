import React from 'react';
import RouteIndexItem from './route_index_item.jsx';

const RouteTypes = {
  Walk: "WALKING",
  Run: "RUNNING",
  Bike: "BICYCLING"
};

class RouteIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {offset: 0, routeType: "All"};
    this.increaseOffset = this.increaseOffset.bind(this);
    this.decreaseOffset = this.decreaseOffset.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.props.requestRoutes();
  }

  componentWillReceiveProps(newProps) {
    newProps.routes.reverse();
  }

  updateState (field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  increaseOffset() {
    if (this.state.offset <= this.props.routes.length - 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset += 10});
      }, 0);
    }
  }

  decreaseOffset() {
    if (this.state.offset >= 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset -= 10});
      }, 0);
    }
  }

  render() {
    let routes = [];
    if (this.state.routeType === "All") {
      routes = this.props.routes;
    } else {
      this.props.routes.forEach(route => {
        if(route.activity_type === RouteTypes[this.state.routeType]) {
          routes.push(route);
        }
      });
    }
    let routeItems = [];
    if (routes) {
      let keys = Object.keys(routes).slice(this.state.offset, this.state.offset + 10);
      keys.forEach (key => {
        routeItems.push(<RouteIndexItem route={routes[key]} key={key} destroyRoute={this.props.destroyRoute} />);
      });
    }

    return(
      <div className="route-list-outer-div">
        <select className="route-index-select" value={this.state.routeType}
          onChange={this.updateState("routeType")}>
          <option value="All">All</option>
          <option value="Walk">Walk</option>
          <option value="Run">Run</option>
          <option value="Bike">Bike</option>
        </select>
        {routeItems}
        <div className="route-page-buttons">
          <img src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473375546/prev_arrow_ikhyek.png" onClick={this.decreaseOffset} />
          <img src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1473375546/next_arrow_a7elvn.png" onClick={this.increaseOffset} />
        </div>
      </div>
    );
  }
}

export default RouteIndex;
