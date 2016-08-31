import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = function(state = _defaultUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultUser, {currentUser});
    case SessionConstants.LOGOUT:
      return merge({}, _defaultUser);
    default:
      return state;
  }
};



export default SessionReducer;
