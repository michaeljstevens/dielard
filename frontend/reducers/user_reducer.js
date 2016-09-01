import { UserConstants } from '../actions/user_actions.js';
import { merge } from 'lodash';

const _defaultUser = Object.freeze({
  currentUser: null,
});

const UserReducer = function(state = _defaultUser, action) {
  switch (action.type) {
    case UserConstants.RECEIVE_UPDATED_USER:
      const currentUser = action.user;
      return merge({}, _defaultUser, {currentUser});
    default:
      return state;
  }
};

export default UserReducer;
