import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import ErrorReducer from '../reducers/error_reducer.js';
import UserReducer from '../reducers/user_reducer.js';
import RouteReducer from '../reducers/route_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  routes: RouteReducer
});

export default RootReducer;
