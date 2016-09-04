import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import ErrorReducer from '../reducers/error_reducer.js';
import UserReducer from '../reducers/user_reducer.js';
import RouteReducer from '../reducers/route_reducer.js';

const AppReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  routes: RouteReducer
});

const RootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default RootReducer;
