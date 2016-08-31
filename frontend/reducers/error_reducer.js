import { merge } from 'lodash';
import { ErrorConstants } from '../actions/error_actions.js';

const ErrorReducer = function(state = [], action){
  switch (action.type) {
    case ErrorConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return action.errors;
    case ErrorConstants.CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;
