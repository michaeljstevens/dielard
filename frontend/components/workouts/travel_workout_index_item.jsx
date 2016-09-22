import React from 'react';

class TravelWorkoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.setDirections = this.setDirections.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
    this.travelWorkout = this.props.travelWorkout;
    this.removeTravelWorkout = this.removeTravelWorkout.bind(this);

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

  removeTravelWorkout() {
    if (this.props.destroyTravelWorkout) {
      this.props.destroyTravelWorkout(this.props.travelWorkout.id);
      this.forceUpdate();
    }
  }

  setDirections() {

    let rendererOptions = {
      map: this.map,
      suppressMarkers: false,
    };

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    if(!this.travelWorkout.route.appcoords) {
      this.directionsDisplay.setMap(this.map);
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    } else {
      //draw polyline
      let coords = this.travelWorkout.route.appcoords;
      const appRoute = new google.maps.Polyline({
          path: coords,
          geodesic: true,
          strokeColor: '#ff3333',
          strokeOpacity: 0.9,
          strokeWeight: 5
        });
        this.map.setCenter(coords[Math.round(coords.length/2)]);
        appRoute.setMap(this.map);
        let zoomLevel = Math.round(15.1527 - 0.381679 * parseInt(this.travelWorkout.route.distance)) - 1;
        console.log(zoomLevel);
        this.map.setZoom(zoomLevel);
        new google.maps.Marker({
          position: coords[0],
          map: this.map,
          label: "A",
        });
        new google.maps.Marker({
          position: coords[coords.length -1],
          map: this.map,
          label: "B"
        });
    }
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

    const route = this.travelWorkout.route;
    let activity_type = "";

    if(route.activity_type === "WALKING") {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887023/walking-icon-hi_bvty27.png";
    } else if(route.activity_type === "RUNNING") {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887028/running-icon-on-transparent-background-md_qqc1go.png";
    } else {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887017/Bicycle-icon_wulxp8.svg";
    }

    return(
      <div className="travelWorkout-index-item">
        <ul className="travel-workout-index-list">
          <label>
            <h2>Date</h2>
            <li>{this.travelWorkout.date}</li>
          </label>
          <label>
            <h2>Distance</h2>
            <li>{this.travelWorkout.route.distance}</li>
          </label>
          <label>
            <h2>Duration</h2>
            <li>{this.travelWorkout.route.duration}</li>
          </label>
          <label>
            <h2>Calories Burned</h2>
            <li>{this.travelWorkout.calories}</li>
          </label>
        </ul>
        <ul className="travel-notes">
          <label>
            <li><img className="route-activity-img" src={activity_type} /></li>
            <h2>Notes</h2>
            <li>{this.travelWorkout.notes}</li>
          </label>
        </ul>
        {this.props.pathName != "/" ? <button className="travel-workout-delete" onClick={this.removeTravelWorkout}>Delete</button> : null}
        <div className="feed-index-map" ref="map"></div>
      </div>
    );
  }
}

export default TravelWorkoutIndexItem;
