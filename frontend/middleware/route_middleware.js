import { RouteConstants, receiveSingleRoute, receiveRoutes } from '../actions/route_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createRoute, fetchRoutes, fetchSingleRoute } from '../util/route_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = route => dispatch(receiveSingleRoute(route));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case RouteConstants.REQUEST_ROUTES:
      let requestRoutesSuccess = (data) => dispatch(receiveRoutes(data));
      fetchRoutes(requestRoutesSuccess, error);
      return next(action);
    case RouteConstants.REQUEST_SINGLE_ROUTE:
      let requestSingleRouteSuccess = (data) => dispatch(receiveSingleRoute(data));
      fetchSingleRoute(action.id, success, error);
      return next(action);
    case RouteConstants.CREATE_ROUTE:
      createRoute(action.route, success, error);
      return next(action);
    default:
      return next(action);
  }
};
