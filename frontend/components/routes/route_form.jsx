import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import RouteFormModal from './route_form_modal.jsx';

class RouteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: props.currentUser.id,
      title: "",
      description: "",
      start_lat: null,
      start_lng: null,
      end_lat: null,
      end_lng: null,
      distance: "",
      duration: ""
    };

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

      if (this.markers.length !== 1) {
        if (this.directionsDisplay != null) {
          this.directionsDisplay.setMap(null);
          this.directionsDisplay = null;
        }
      }

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

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let that = this;

    directionsService.route({
      origin: this.markers[0].position,
      destination: this.markers[1].position,
      travelMode: 'WALKING'
    }, function(response, status) {
      if(status === 'OK') {
        const distance = response.routes[0].legs[0].distance.text;
        const duration = response.routes[0].legs[0].duration.text;
        that.setState({distance: distance, duration: duration});
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to' + status);
      }
    });
    for (let i = 0; i < 2; i++) {
      this.markers[i].setMap(null);
    }

    this.setState({start_lat: this.markers[0].position.lat()});
    this.setState({start_lng: this.markers[0].position.lng()});
    this.setState({end_lat: this.markers[1].position.lat()});
    this.setState({end_lng: this.markers[1].position.lng()});

    this.markers = [];
  }

  render () {
    return(
      <div>
        <RouteFormModal state={this.state} currentUser={this.props.currentUser} dispatch={this.props.createRoute}/>
        <div className="map" ref="map"></div>
      </div>
    );
  }
}


export default RouteForm;
