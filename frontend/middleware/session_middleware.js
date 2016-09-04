import { SessionConstants, receiveCurrentUser } from '../actions/session_actions';
import { receiveErrors } from '../actions/error_actions.js';
import { login, signup, logout } from '../util/session_api_util';
import { hashHistory } from 'react-router';

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
      const logoutSuccess = () => hashHistory.push("/login");
      logout(logoutSuccess);
      return next(action);
    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};
