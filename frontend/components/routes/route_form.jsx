import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class RouteForm extends React.Component {

  constructor(props) {
    super(props);
    this.markers = [];
    this.setDirections = this.setDirections.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    google.maps.event.addListener(this.map, 'click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const coords = {lat: lat, lng: lng};
      const marker = new google.maps.Marker({
        position: coords,
        map: this.map,
      });
      this.markers.push(marker);
      if (this.markers.length === 2) {
        this.setDirections();
      }
    });
  }

  setDirections() {

    let rendererOptions = {
      map: this.map,
      suppressMarkers: false,
    };

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: this.markers[0].position,
      destination: this.markers[1].position,
      travelMode: 'WALKING'
    }, function(response, status) {
      if(status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to' + status);
      }
    });
    for (let i = 0; i < 2; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  render () {
    return(
      <div className="map" ref="map">routeform</div>
    );
  }
}

export default RouteForm;
