import { UserConstants } from '../actions/user_actions.js';
import {receiveCurrentUser } from '../actions/session_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { update } from '../util/user_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case UserConstants.UPDATE:
      update(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};
