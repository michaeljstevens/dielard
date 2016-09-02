import React from 'react';
import RouteIndexItem from './route_index_item.jsx';

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.requestRoutes();
  }

  render() {
    let routes = this.props.routes;
    let routeLis = [];
    if (!!routes) {
      Object.keys(routes).forEach (key => {
        routeLis.push(<RouteIndexItem route={routes[key]} />);
      });
    }
    return(
      <div>{routeLis}</div>
    );
  }
}

export default RouteIndex;
