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
    case RouteConstants.REMOVE_ROUTE:
      console.log(action.route);
      const badRoute = action.route;
      const nextState = merge({}, state);
      nextState.allRoutes = nextState.allRoutes.filter(r => {
        return r.id !== action.route.id;
      });
      return nextState;
    default:
      return state;
  }
};



export default RouteReducer;
