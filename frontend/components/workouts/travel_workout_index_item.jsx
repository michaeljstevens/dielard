import React from 'react';

class TravelWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.setDirections = this.setDirections.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
    this.travelWorkout = this.props.travelWorkout;
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.setDirections();
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
    let origin = {lat: this.travelWorkout.route.start_lat, lng: this.travelWorkout.route.start_lng};
    let destination = {lat: this.travelWorkout.route.end_lat, lng: this.travelWorkout.route.end_lng};
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: 'WALKING'
    }, function(response, status) {
      if(status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        setTimeout( () => {
          that.calculateAndDisplayRoute(directionsService, directionsDisplay);
        }, 200);
      }
    });
  }

  render() {

    return(
      <div className="travelWorkout-index-item">
        <ul className="travel-workout-index-list">
          <li>{this.travelWorkout.date}</li>
          <li>{this.travelWorkout.notes}</li>
          <li>{this.travelWorkout.calories}</li>
        </ul>
        <div className="feed-index-map" ref="map"></div>
      </div>
    );
  }

}

export default TravelWorkoutIndexItem;
