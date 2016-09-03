import React from 'react';
import RouteIndexItem from './route_index_item.jsx';

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.requestRoutes();
  }

  render() {
    let routes = this.props.routes;
    let routeItems = [];
    if (!!routes) {
      Object.keys(routes).forEach (key => {
        routeItems.push(<RouteIndexItem route={routes[key]} key={key} destroyRoute={this.props.destroyRoute} />);
      });
    }

    return(
      <div className="route-list-outer-div">
        {routeItems}
      </div>
    );
  }
}

export default RouteIndex;
