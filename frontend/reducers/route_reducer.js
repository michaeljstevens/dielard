import { RouteConstants } from '../actions/route_actions.js';
import { merge } from 'lodash';

const RouteReducer = function(state = {}, action){
  switch(action.type){
    case RouteConstants.RECEIVE_ROUTES:
      const allRoutes = action.routes;
      return merge({}, state, {allRoutes});
    case RouteConstants.RECEIVE_SINGLE_ROUTE:
      const route = action.route;
      return merge({}, state, {route});
    default:
      return state;
  }
};



export default RouteReducer;
