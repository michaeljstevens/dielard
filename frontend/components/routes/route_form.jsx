import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


class RouteForm extends React.Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render () {
    return(
      <div className="map" ref="map">routeform</div>
    );
  }
}

export default RouteForm;
