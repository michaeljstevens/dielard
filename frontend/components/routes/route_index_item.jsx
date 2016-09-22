import React from 'react';

class RouteIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.setDirections = this.setDirections.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
    this.removeRoute = this.removeRoute.bind(this);
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

    if(!this.props.route.appcoords) {
      this.directionsDisplay.setMap(this.map);
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    } else {
      //draw polyline
      const appRoute = new google.maps.Polyline({

          path: this.props.route.appcoords,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        appRoute.setMap(this.map);
    }
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let that = this;
    let origin = {lat: this.props.route.start_lat, lng: this.props.route.start_lng};
    let destination = {lat: this.props.route.end_lat, lng: this.props.route.end_lng};
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

  removeRoute () {
    if (this.props.destroyRoute) {
      this.props.destroyRoute(this.props.route.id);
      this.setState({route: null});
    }
  }

  render() {
    const route = this.props.route;
    let activity_type = "";
    if(route.activity_type === "WALKING") {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887023/walking-icon-hi_bvty27.png";
    } else if(route.activity_type === "RUNNING") {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887028/running-icon-on-transparent-background-md_qqc1go.png";
    } else {
      activity_type = "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472887017/Bicycle-icon_wulxp8.svg";
    }

    const deleteButton = <button className="route-list-delete-button" onClick={this.removeRoute}>Delete</button>;

    return(
      <div className="route-list-div">
        {this.props.destroyRoute ? deleteButton : null}
        <ul className="route-list-ul">
          <li><img className="route-activity-img" src={activity_type} /></li>
          <li className="route-list-item-title">{route.title}</li>
          <li className="route-list-item">{route.description}</li>
          <li className="route-list-item">{route.distance}</li>
          <li className="route-list-item">{route.duration}</li>
        </ul>
        <div className="small-map" ref="map"></div>
      </div>
    );
  }
}

export default RouteIndexItem;
