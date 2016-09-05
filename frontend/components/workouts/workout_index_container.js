import {connect} from 'react-redux';
import WorkoutIndex from './workout_index.jsx';
import {requestTravelWorkouts, destroyTravelWorkout} from '../../actions/travel_workout_actions.js';
import { requestRoutes } from '../../actions/route_actions.js';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts,
    routes: state.routes.allRoutes
  });
};

const mapDispatchToProps = (dispatch) =>({
  requestTravelWorkouts: () => dispatch(requestTravelWorkouts()),
  requestRoutes: () => dispatch(requestRoutes()),
  destroyExercise: id => dispatch(destroyTravelWorkout(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
