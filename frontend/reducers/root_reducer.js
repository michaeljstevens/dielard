import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import ErrorReducer from '../reducers/error_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer
});

export default RootReducer;
