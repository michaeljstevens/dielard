import { RouteConstants, receiveSingleRoute } from '../actions/route_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createRoute } from '../util/route_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = route => dispatch(receiveSingleRoute(route));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case RouteConstants.CREATE_ROUTE:
      createRoute(action.route, success, error);
      return next(action);
    default:
      return next(action);
  }
};
