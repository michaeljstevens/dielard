import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import ErrorReducer from '../reducers/error_reducer.js';
import UserReducer from '../reducers/user_reducer.js';
import RouteReducer from '../reducers/route_reducer.js';
import ExerciseReducer from '../reducers/exercise_reducer.js';

const AppReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  routes: RouteReducer,
  exercises: ExerciseReducer
});

const RootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default RootReducer;
