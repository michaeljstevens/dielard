import React from 'react';

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.requestRoutes();
  }

  render() {
    let routes = this.props.routes;
    let routeLis = [];
    if (!!routes) {
      Object.keys(this.props.routes).forEach (key => {
        routeLis.push(<li>{this.props.routes[key].user_id}</li>);
      });
    }
    return(
      <div>{routeLis}</div>
    );
  }
}

export default RouteIndex;
