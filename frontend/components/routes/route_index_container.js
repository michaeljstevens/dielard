import {connect} from 'react-redux';
import RouteIndex from './route_index.jsx';
import {requestRoutes} from '../../actions/route_actions.js';


const mapStateToProps = (state) => {
  return({
    routes: state.routes.allRoutes
  });
};

const mapDispatchToProps = (dispatch) =>({
  requestRoutes: () => dispatch(requestRoutes()),
});


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
