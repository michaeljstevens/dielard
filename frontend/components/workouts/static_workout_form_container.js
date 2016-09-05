import { connect } from 'react-redux';
import StaticWorkoutForm from './static_workout_form.jsx';
import {createStaticWorkout} from '../../actions/static_workout_actions.js';
import {requestExercises} from '../../actions/exercise_actions.js';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  exercises: state.exercises.allExercises
});

const mapDispatchToProps = (dispatch) => ({
  createStaticWorkout: staticWorkout => dispatch(createStaticWorkout(staticWorkout)),
  requestExercises: () => dispatch(requestExercises())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaticWorkoutForm);
