import {connect} from 'react-redux';
import RouteIndexItem from './route_index_item.jsx';
import {requestSingleRoute} from '../../actions/route_actions.js';


const mapStateToProps = (state) => {
  return({
    route: state.routes.route
  });
};

const mapDispatchToProps = (dispatch) =>({
  requestSingleRoute: () => dispatch(requestSingleRoute()),
});


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndexItem);
