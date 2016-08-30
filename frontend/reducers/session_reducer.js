import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = function(state = _defaultUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultUser, {currentUser});
    case SessionConstants.LOGOUT:
      return merge({}, _defaultUser);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultUser, {errors});
    default:
      return state;
  }
};



export default SessionReducer;
