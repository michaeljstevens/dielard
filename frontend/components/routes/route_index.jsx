import React from 'react';
import RouteIndexItem from './route_index_item.jsx';

class RouteIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.increaseOffset = this.increaseOffset.bind(this);
    this.decreaseOffset = this.decreaseOffset.bind(this);
  }

  componentDidMount() {
    this.props.requestRoutes();
  }

  increaseOffset() {
    if (this.state.offset <= this.props.routes.length - 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset += 10});
      }, 500);
    }
  }

  decreaseOffset() {
    if (this.state.offset >= 10) {
      setTimeout( () => {
        this.setState({offset: this.state.offset -= 10});
      }, 500);
    }
  }

  render() {
    let routes = this.props.routes;
    let routeItems = [];
    if (routes) {
      let keys = Object.keys(routes).slice(this.state.offset, this.state.offset + 10);
      keys.forEach (key => {
        routeItems.push(<RouteIndexItem route={routes[key]} key={key} destroyRoute={this.props.destroyRoute} />);
      });
    }

    return(
      <div className="route-list-outer-div">
        {routeItems}
        <div className="route-page-buttons">
          <button className="route-next-page" onClick={this.increaseOffset}>Next Page</button>
          <button className="route-prev-page" onClick={this.decreaseOffset}>Previous Page</button>
        </div>
      </div>
    );
  }
}

export default RouteIndex;
