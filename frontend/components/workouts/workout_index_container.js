import {connect} from 'react-redux';
import WorkoutIndex from './workout_index.jsx';
import {requestTravelWorkouts, destroyTravelWorkout} from '../../actions/travel_workout_actions.js';
import {requestStaticWorkouts, destroyStaticWorkout} from '../../actions/static_workout_actions.js';
import { requestRoutes } from '../../actions/route_actions.js';
import { requestExercises } from '../../actions/exercise_actions.js';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts,
    staticWorkouts: state.staticWorkouts.allStaticWorkouts,
  });
};

const mapDispatchToProps = (dispatch) =>({
  requestTravelWorkouts: () => dispatch(requestTravelWorkouts()),
  requestStaticWorkouts: () => dispatch(requestStaticWorkouts()),
  destroyTravelWorkout: id => dispatch(destroyTravelWorkout(id)),
  destroyStaticWorkout: id => dispatch(destroyStaticWorkout(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
