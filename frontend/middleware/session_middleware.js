import { SessionConstants, receiveCurrentUser } from '../actions/session_actions';
import { receiveErrors } from '../actions/error_actions.js';
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};
