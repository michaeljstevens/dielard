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
        routeItems.push(<RouteIndexItem route={routes[key]} />);
      });
    }

    return(
      <div className="route-list-outer-div">
        <div className="route-list-inner-div">
          {routeItems}
        </div>
        <img className="splash-image" src="http://res.cloudinary.com/dj6gqauyi/image/upload/v1472860722/photo-1452573992436-6d508f200b30_h43qwh.jpg" alt=""/>
      </div>
    );
  }
}

export default RouteIndex;
