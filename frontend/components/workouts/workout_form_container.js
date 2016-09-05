import { connect } from 'react-redux';
import WorkoutForm from './workout_form.jsx';
import {createTravelWorkout} from '../../actions/travel_workout_actions.js';
import {requestRoutes} from '../../actions/route_actions.js';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  routes: state.routes.allRoutes
});

const mapDispatchToProps = (dispatch) => ({
  createTravelWorkout: travelWorkout => dispatch(createTravelWorkout(travelWorkout)),
  requestRoutes: () => dispatch(requestRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutForm);
